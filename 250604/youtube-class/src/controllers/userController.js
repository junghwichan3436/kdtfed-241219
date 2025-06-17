import User from "../models/user";
import Video from "../models/video";
import bcrypt from "bcrypt";
import fetch from "node-fetch";

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res) => {
  const { email, id, password, password2, name, location } = req.body;
  const pageTitle = "Join";
  if (password !== password2) {
    return res.status(400).render("join", {
      //status 값을 400으로 줘야지 틀린암호를 브라우저에서 저장하지 않는다
      pageTitle,
      errorMessage: "Password confirmation does not match",
    });
  }

  const exists = await User.exists({ $or: [{ id }, { email }] }); //사용자의 아이디가 존재하냐 둘중에 하나가 존재하면 true값이 나온다
  if (exists) {
    return res.status(400).render("join", {
      //status 값을 400으로 줘야지 틀린암호를 브라우저에서 저장하지 않는다
      pageTitle,
      errorMessage: "This ID/Email is already taken",
    });
  }

  try {
    await User.create({
      // create 몽고디비에서 무언갈 생성하는 함수
      email,
      id,
      password,
      name,
      location,
    });
    return res.redirect("/login");
  } catch (error) {
    return res
      .status(400)
      .render("join", { pageTitle: "Join", errorMessage: error._message });
  }
};

export const getEdit = (req, res) => {
  return res.render("edit-profile", { pageTitle: "Edit Profile" });
};

export const postEdit = async (req, res) => {
  const {
    session: {
      user: { _id, avatarUrl, email: sessionEmail, id: sessionId },
    }, //email을 sessionEmail로 찾아왔다
    body: { email, uid, name, location },
    file,
  } = req;

  const idExists =
    uid !== sessionId ? await User.exists({ id: uid }) : undefined;

  const emailExists =
    email !== sessionEmail ? await User.exists({ email }) : undefined;

  if (idExists || emailExists) {
    return res.status(400).render("edit-profile", {
      pageTitle: "Edit Profile",
      idErrorMessage: idExists ? "This ID is already taken" : 0,
      emailErrorMessage: emailExists ? "This Email is already taken" : 0,
    }); // 원래 input값에 값을 넣으면 저장하는데  status 400값을 값을 저장하지 말라는것
  }
  // 로그인한 유저의 세션과 같다면 사용자의 정보값을 바꿔줘라
  const updatedUser = await User.findByIdAndUpdate(
    _id,
    {
      avatarUrl: file ? file.path.replace(/\\/g, "/") : avatarUrl, //직접 avatarUrl을 만들 수 있게되었다
      email,
      id: uid,
      name,
      location,
    }, //세번째 인자값
    { new: true }
  );

  // req.session.user = {
  //   ...req.session.user,
  //   email,
  //   id: uid,
  //   name,
  //   location,
  // };

  req.session.user = updatedUser;
  return res.redirect("/users/edit");
};

export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "Login" });
};

export const postLogin = async (req, res) => {
  const { id, password } = req.body; //body에서  id와 password를 찾아온다
  const user = await User.findOne({ id, socialOnly: false }); //아이디가 존재하지않는다면 400페이지를 띄운다

  const pageTitle = "Login";
  if (!user) {
    //findOne 해싱되어진 값을 찾기 위해 findOne이라는 함수를 썻다
    //findOne은 그 아이디값에 해당하는 모든요소 즉, 아이디 패스워드 이름 주소 등을 전부 찾아오기 때문에 해싱된 패스워드를 찾아오기위해 findOne을 사용했다!!!!
    //exist({id})를 썻을 때는 id 만 찾아온다
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "An account with this ID does not match",
    });
  }

  const ok = await bcrypt.compare(password, user.password); //bcrypt 는 두개의 인자값을 받는데 패스워드와 패싱된 패스워드를 받는다
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "Wrong Password",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user; //session 안에 유저와 로그인을 한 유저와 같다
  return res.redirect("/");
};

export const logout = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};

export const see = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).populate("videos");
  if (!user) {
    return res.status(404).render("404", { pageTitle: "User not found." });
  }
  return res.render("users/profile", {
    pageTitle: user.name,
    user,
  });
};

export const startGithubLogin = (req, res) => {
  const baseUrl = "https://github.com/login/oauth/authorize";
  const config = {
    client_id: process.env.GH_CLIENT,
    allow_signup: false,
    scope: "read:user user:email",
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  return res.redirect(finalUrl);
};

export const finishGithubLogin = async (req, res) => {
  const baseUrl = "https://github.com/login/oauth/access_token";
  const config = {
    client_id: process.env.GH_CLIENT,
    client_secret: process.env.GH_SECRET,
    code: req.query.code,
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  const tokenRequest = await (
    await fetch(finalUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })
  ).json();
  if ("access_token" in tokenRequest) {
    const { access_token } = tokenRequest;
    const apiUrl = "https://api.github.com";
    const userData = await (
      await fetch(`${apiUrl}/user`, {
        method: "GET",
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    console.log(userData);
    const emailData = await (
      await fetch(`${apiUrl}/user/emails`, {
        method: "GET",
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    const emailObj = emailData.find(
      (email) => email.primary === true && email.verified === true
    );
    if (!emailObj) {
      return res.redirect("/login");
    }
    let user = await User.findOne({ email: emailObj.email });
    if (!user) {
      user = await User.create({
        email: emailObj.email,
        socialOnly: true,
        avatarUrl: userData.avatar_url,
        id: userData.login,
        password: "",
        name: userData.name,
        location: userData.location,
      });
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/");
  } else {
    return res.redirect("/login");
  }
};

export const getChangePassword = (req, res) => {
  if (req.session.user.socialOnly === true) {
    return res.redirect("/");
  } // 깃허브로 들어온사람들은 패스워드가 없기 때문에 홈으로 보낸다
  return res.render("users/change-password", { pageTitle: "Change Password" });
}; //얘만 users안에 있기 때문에 users/change-password 앞에 users를 붙여주어야 알아듣는다

export const postChangePassword = async (req, res) => {
  const {
    session: {
      user: { _id }, // 원래{_id,password} //이 password는 session 안에 있기 때문에 해싱되어져 있을 확률이 놓다
    },
    body: { oldPassword, newPassword, newPasswordConfirmation },
  } = req;

  const user = await User.findById(_id);

  //전 사용자의 password와 oldpassword 가 같지 않다면
  const ok = await bcrypt.compare(oldPassword, user.password);
  if (!ok) {
    return res.status(400).render("users/change-password", {
      pageTitle: "Change Password",
      errorMessage: "The current password is incorrect",
    });
  }

  //password와 확인용password 가 다르다면
  if (newPassword !== newPasswordConfirmation) {
    return res.status(400).render("users/change-password", {
      pageTitle: "Change Password",
      errorMessage: "The password does not match the confirmation",
    });
  }

  // const user = await User.findById(_id); //해시된 옛날 패스워드
  // console.log("Old password:", user.password);

  user.password = newPassword; //해시되지 않은 새패스워드
  // console.log("New unhashed password : ", user.password);

  await user.save(); //저장된 새 해시된 패스워드
  // console.log("New password : ", user.password);
  req.session.user.password = user.password;
  return res.redirect("/users/logout"); // 패스워드가 바뀌어진다면 logout으로 가라
};
