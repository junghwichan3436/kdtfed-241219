// *유틸리티 타입

import { title } from "process";

// patial
// interface Post {
//   title: string;
//   tags: string;
//   content: string;
//   thumbnail: string;
// }

// const draft: Partial<Post> = {
//   title: "밥먹자",
//   content: "제육복음",
// };
// // partial을 씀으로 써 인터페이스의 post는 옵셔널한프로퍼티 값을 가진다

// ---------------------------------------
// // partial이라는 유틸리티파일을 선언할때 이렇게 쓴다
// type Partial01<T> = {
//   [key in keyof T]: T[key];
// };

// interface Post {
//   title: string;
//   tags: string[];
//   contents: string;
//   thumbnail?: string;
// }

// const withThumbnailPost: Required<Post> = {
//   title: "밥은 먹고 다니냐",
//   tags: ["해장국"],
//   contents: "달래해장국",
//   // thumbnail: "https/www.naver.com",
// };

const withThumbnailPost: Readonly<Post> = {
  title: "밥은 먹고 다니냐",
  tags: ["해장국"],
  contents: "달래해장국",
  thumbnail: "https/www.naver.com",
};

withThumbnailPost.contents = "맘스터치";

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

// Required타입 선언할때 이렇게 쓴다
//-? 를 써서 옵셔널 프로퍼티를 쓸 때의 그 ?를 쓰지 않는다
// type Required<T> = {
//   [key in keyof T]-?: T[key];
// };
