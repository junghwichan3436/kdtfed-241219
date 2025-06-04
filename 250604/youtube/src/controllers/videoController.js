export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};

export const see = (req, res) => {
  return res.render("watch", { pageTitle: "Watch" });
};

export const edit = (req, res) => {
  return res.send(
    `<!DOCTYPE html><head><title>Youtube</title></head><body><h1>Edit Video #${req.params.id}</h1></body>`
  );
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
