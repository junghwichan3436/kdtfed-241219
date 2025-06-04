# Youtube Product

/ -> Home
/join -> join
/login -> Login
/search -> Search

/edit-user -> Edit User
/delete-user -> Delete User

/watch-video -> Watch Video
/edit-video -> Edit Video
/delete-video -> Delete Video

# After URL(\*RESTful API)

# Global Router

//파라미터값 하나만 넣어서 들어갈 수 있는 페이지, 홈에서 바로갈 수 있는 페이지
/ -> Home
/join -> join
/login -> Login
/search -> Search

//파라미터값 여러개 넣어서 들어갈 수 있는 페이지
/users/eidt -> Edit User
/users/delete -> Delete User

/videos/watch -> Watch Video
/videos/edit-> Edit Video
/videos/delete -> Delete Vide
/videos/comment/delete -> Delete a comment on a video

# Pivot(Upgrade) Router

/ -> Home
/join -> join
/login -> Login
/search -> Search

/users/:id -> See User
/users/logout -> Logout
/users/eidt -> Edit My Profile
/users/delete -> Delete My Profile

/videos/:id - See Video 몇번째 비디오를 보여줄거야
/videos/:id/edit -> Edit Video 몇번째 비디오를 수정할거야
/videos/:id/delete -> Delete Video 몇번째 비디오를 삭제할거야
/videos/upload -> Upload Video
