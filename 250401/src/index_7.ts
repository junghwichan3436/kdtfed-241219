// Mapped 타입
/*
interface User {
  id: number;
  name: string;
  age: number;
}

const fetchUser = (): User => {
  return {
    id: 1,
    name: "David",
    age: 20,
  };
};

// 해당정보값을 수정하는
//굳이 타입을 이렇게 만들지 않고 만드는 방법
// PartialUser를 쓸때에만 User의 값을 옵셔널하게 바꾸어준다
type PartialUser = {
  readonly [key in keyof User]?: User[key];
}; // 안에 무엇이들어가냐에따라 키값이 바뀌어지고 옵셔널 프로퍼티의 형식으로 바꾼다
// User라는 interface타입을 찾아와서 타입에만 부착가능한 keyof 를 사용해서 코드를 유니언 타입이던 코드를 더 짧게 해준다
// type PartialUser = {
//   id?: number;
//   name?: string;
//   age?: number;
// };

const updateUser = (user: PartialUser) => {};

updateUser({ age: 25 });*/

type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

//type ColoredAnimal = "red-dog" | "red-cat" | "red-chicken"/
type ColoredAnimal = `${Color}-${Animal}`;
