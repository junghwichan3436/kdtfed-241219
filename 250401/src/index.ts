interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL: string;
}

// pick은 타입변수 두개를 받는데 하나는 지목할 변수 두번째는 찾아오는거고
const legacyPost: Pick<Post, "title" | "content"> = {
  title: "힘내자",
  content: "할 수 있잖아!!!",
};

// pick 이라는 거 선언하기
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

// ------------------------------------------
// Omit => 생략하다
//title이라는 프로퍼티의 값만 생략해서 정의한다
const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "string",
};
// -------------------------------------------
// Exclude
type A = Exclude<string | boolean, string>;
// string 값을 추출해줘
type B = Extract<string | boolean, boolean>;
//boolean 값을 추출해줘
