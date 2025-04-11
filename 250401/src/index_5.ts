interface Post {
  id: number;
  title: string;
  content: string;
}
//class도 타입이다
const fetchPost = (): Promise<Post> => {
  return new Promise((resolve, reject) => {
    //fetch 함수를 썻으니까 promise 객체가 들어온다
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글본문",
      });
    }, 3000);
  });
};
