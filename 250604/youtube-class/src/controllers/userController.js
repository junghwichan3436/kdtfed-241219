import User from "../models/user";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res) => {
  const { email, id, password, password2, name, location } = req.body;
  const pageTitile = "Login";
  if (password !== password2) {
    return res.status(400).render("join", {
      //status 값을 400으로 줘야지 틀린암호를 브라우저에서 저장하지 않는다
      pageTitile,
      errorMessage: "Password Confirmation does not match",
    });
  }
  const Exists = await User.exists({ $or: [{ id }, { email }] }); //사용자의 아이디가 존재하냐 둘중에 하나가 존재하면 true값이 나온다
  if (Exists) {
    return res.status(400).render("join", {
      //status 값을 400으로 줘야지 틀린암호를 브라우저에서 저장하지 않는다
      pageTitile,
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
    console.log(req.body);
    return res.redirect("/login");
  } catch (error) {
    return res
      .status(400)
      .render("join", { pageTitle: "Join", errorMessage: error._message });
  }
};

export const edit = (req, res) => {
  return res.send("Edit User");
};

export const remove = (req, res) => {
  return res.send("Remove User");
};

export const getLogin = (req, res) => {
  return res.render("Login", {
    pageTitle: "Login",
    errorMessage: "This Password is not correct",
  });
};

export const postLogin = async (req, res) => {
  const { id, password } = req.body; //body에서  id와 password를 찾아온다
  const user = await User.findOne({ id }); //아이디가 존재하지않는다면 400페이지를 띄운다
  const pageTitile = "Login";
  if (!user) {
    //findOne 해싱되어진 값을 찾기 위해 findOne이라는 함수를 썻다
    //findOne은 그 아이디값에 해당하는 모든요소 즉, 아이디 패스워드 이름 주소 등을 전부 찾아오기 때문에 해싱된 패스워드를 찾아오기위해 findOne을 사용했다!!!!
    //exist({id})를 썻을 때는 id 만 찾아온다
    return res.status(400).render("login", {
      pageTitile,
      errorMessage: "An account with this ID does not match",
    });
  }
  const ok = await bcrypt.compare(password, user.password); //bcrypt 는 두개의 인자값을 받는데 패스워드와 패싱된 패스워드를 받는다
  if (!ok) {
    return res.status(400).render("login", {
      pageTitile,
      errorMessage: "Wrong Password",
    });
  }
  return res.end();
};

export const logout = (req, res) => {
  return res.send("Logout");
};

export const see = (req, res) => {
  return res.send("See User");
};
