import Video from "../models/video";

// export const home = (req, res) => {
//   Video.find({})
//     .then((videos) => {
//       console.log("videos", videos);
//       return res.render("home", { pageTitle: "Home", videos: [] }); // 뒤에 변수를 무한대로 만들 수 있다
//     })
//     .catch((error) => console.log("errors", error));
//   console.log("Start");
// };

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    console.log(videos);
    return res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    return res.render("Server-Error", { error });
  }
};

export const watch = async (req, res) => {
  const { id } = req.params;
  // const video = videos[id - 1];
  const video = await Video.findById(id);
  return res.render("watch", { pageTitle: `Watching`, video });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  // const video = videos[id - 1]; //인덱스에서 몇번째 영상인지 알 수 있다
  return res.render("edit", { pageTitle: `Editing` });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  // videos[id - 1].title = title; //0번째 비디오의 타이틀 값을 우리가 찾아온 타이틀 값을 바꾸어 준다
  return res.redirect(`/videos/${id}`); // redirect() 실행되면 자동으로 어딘가로 보내겠다
};

export const search = (req, res) => {
  return res.send("Video Search");
};

export const deleteVideo = (req, res) => {
  return res.send("Video Delete");
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: `Upload Video` });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: hashtags.split(",").map((word) => `#${word}`),
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
//하나의 파일안에서 여러개의 함수를 출력하고자 한다면 함수앞에 export를 각각 써준다

//파이널웨어는 마지막페이지니까 파라미터값을 찾아올 수 있음!!
