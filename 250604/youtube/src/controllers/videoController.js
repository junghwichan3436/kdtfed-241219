let videos = [
  {
    id: 1,
    title: "First Video",
    createdAt: "2 minutes ago",
    views: 59,
    comment: 2,
    rating: 5,
  },
  {
    id: 2,
    title: "Second Video",
    createdAt: "2 minutes ago",
    views: 59,
    comment: 2,
    rating: 5,
  },
  {
    id: 3,
    title: "Third Video",
    createdAt: "2 minutes ago",
    views: 59,
    comment: 2,
    rating: 5,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos }); // 뒤에 변수를 무한대로 만들 수 있다
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching${video.title}`, video });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1]; //인덱스에서 몇번째 영상인지 알 수 있다
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title; //0번째 비디오의 타이틀 값을 우리가 찾아온 타이틀 값을 바꾸어 준다
  return res.redirect(`/videos/${id}`); // redirect() 실행되면 자동으로 어딘가로 보내겠다
};

export const search = (req, res) => {
  return res.send("Video Search");
};

export const upload = (req, res) => {
  return res.send("Video Upload");
};

export const deleteVideo = (req, res) => {
  return res.send("Video Delete");
};

//하나의 파일안에서 여러개의 함수를 출력하고자 한다면 함수앞에 export를 각각 써준다

//파이널웨어는 마지막페이지니까 파라미터값을 찾아올 수 있음!!
