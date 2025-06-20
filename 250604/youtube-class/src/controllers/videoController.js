import { populate } from "dotenv";
import User from "../models/user";
import Video from "../models/video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({})
      .sort({ createdAt: "desc" }) // desc:내림차순 asc오름차순
      .populate("owner");
    return res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    return res.render("Server-Error", { error });
  }
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id).populate("owner");

  if (!video) {
    return res.render("404", { pageTitle: "Video Not Found" });
  }
  return res.render("watch", { pageTitle: video.title, video });
};

export const getEdit = async (req, res) => {
  // 수정할 것
  const { id } = req.params;
  const {
    user: { _id },
  } = req.session;
  const video = await Video.findById(id); //#findById id 값 하나만 찾아온다
  if (!video) {
    return res.render("404", { pageTitle: "Video Not Found" });
  }
  if (String(video.owner) !== String(_id)) {
    return res.status(403).redirect("/");
  }
  return res.render("edit", { pageTitle: `Edit : ${video.title}`, video });
};

export const postEdit = async (req, res) => {
  // 수정할 것
  const {
    user: { _id },
  } = req.session;
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  // const video = await Video.findById(id);
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.render("404", { pageTitle: "Video Not Found" });
  }
  if (String(video.owner) !== String(_id)) {
    return res.status(403).redirect("/");
  } //수정 하려고 넣는 것
  await Video.findByIdAndUpdate(id, {
    //#findByIdAndUpdate Id값에 해당되는 요소를 찾아와서 업데이트 해준다
    title,
    description,
    hashtags: Video.formatHashtags(hashtags), // 사망조건 연산자와 split을 거쳐야 하기 때문에 그냥 합칠 순 없다!!!
  });

  return res.redirect(`/videos/${id}`);
};

export const search = async (req, res) => {
  const { keyword } = req.query; //구조분해 할당으롤 keyword:원피스에서 원피스만 찾아온다
  let videos = []; //빈배열을 무조건 받는데 값이 있으면 find로 찾아서 값을 넣어주고 값이 없으면 return문에서 videos는 값이 없는 배열이 간다!!
  if (keyword) {
    videos = await Video.find({
      title: {
        $regex: new RegExp(keyword, "gi"), //정규표현식 i를 써도 다 찾아오지만 gi를 쓰는 것이 정석이다
      },
      // description: {
      //   $regex: new RegExp(keyword, "gi"), //정규표현식 i를 써도 다 찾아오지만 gi를 쓰는 것이 정석이다
      // },
      // hashtags: {
      //   $regex: new RegExp(keyword, "gi"), //정규표현식 i를 써도 다 찾아오지만 gi를 쓰는 것이 정석이다
      // },
    }).populate("owner"); //user가 keyword를 적었다면
  }
  return res.render("search", { pageTitle: "Search", videos });
};

export const deleteVideo = async (req, res) => {
  const {
    user: { _id },
  } = req.session;
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render("404", { pageTitle: "Video not found." });
  }
  if (String(video.owner) !== String(_id)) {
    return res.status(403).redirect("/");
  }
  await Video.findByIdAndDelete(id);
  return res.redirect("/"); //redirect 어디론가 경로를 우회해준다
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: `Upload Video` });
};

export const postUpload = async (req, res) => {
  const {
    user: { _id },
  } = req.session;
  const { path } = req.file;
  const { title, description, hashtags } = req.body;
  try {
    const newVideo = await Video.create({
      title,
      description,
      fileUrl: path.replace(/\\/g, "/"),
      hashtags: Video.formatHashtags(hashtags), //video 안에 만들어 놔서 호환이 가능하다
      owner: _id,
    });
    const user = await User.findById(_id);
    user.videos.push(newVideo._id);
    user.save();
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};

export const registerView = async (req, res) => {
  //조회수 점검하기위한 함수
  const { id } = req.params;
  console.log(id);
  const video = await Video.findById(id);
  if (!video) {
    return res.sendStatus(404); //status를 쓰는 경우 우리는 거의 render를 사용해 404페이지로 이동시켜 주었지만 여기서는 굳이 이동이 필요하지 않기 때문에 sendStatus라는 함수를 사용해서 그 페이지 자체를 404로 만들어 준다!!!
  }
  video.meta.views += 1;
  await video.save();
  return res.sendStatus(200);
};
//ended가 된다면 videoRouter에게 알려줘서 videoRouter는 videos의 meta의 view 값을 바꿔라
