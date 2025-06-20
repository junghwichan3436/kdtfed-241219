import multer from "multer";

export const localMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Youtube";
  res.locals.loggedInUser = req.session.user || {};
  // console.log(req.session.user);
  next();
};
//내가 로그인이 안되어 있다면 특정 페이지로 가지 못하게
//로그인이 된사람만
export const protectedMiddleware = (req, res, next) => {
  if (req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/login");
  }
};
//내가 이미 로그인이 되어 있다면  로그인 페이지로 안가게
//로그인이 안된 사람만
export const publicOnlyMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/");
  }
};

export const avatarUpload = multer({
  dest: "uploads/avatars",
  limits: { fileSize: 3000000 },
});

export const videoUpload = multer({
  dest: "uploads/videos",
  limits: { fileSize: 300000000 },
});
