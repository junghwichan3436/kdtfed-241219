import { atom, selector } from "recoil";
//객체의 타입정의 interface
//배열의 타입정의 number[]

export enum Categories {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
} // enum 타입으로 정해준다

type categories = "TODO" | "DOING" | "DONE";

export interface IToDo {
  id: number;
  text: string;
  category: categories;
  //리터럴 타입 대수타입에서 슈퍼타입은 상대적으로 많은 값을 수용가능하다
}

export const categoryState = atom<categories>({
  key: "category",
  default: Categories.TODO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [], //todo리스트의 값들이 여러개니 객체에 담아서 이터러블하게 인덱스 값을 쓸 수 있도록 배열로 해준다
});

//get이 atom안에 있는 함수를 찾아오는 역할을 한다
//selector 배열을 꺼내서 내가 원하는 입맛대로 바꿔주는 함수
// selector를 통해 배열을 3개로 만들어서 TODO,DOING,DONE을 만들었다
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    // if (category === "TODO") {
    //   return toDos.filter((toDo) => toDo.category === "TODO");
    // }
    // if (category === "TODO") {
    //   return toDos.filter((toDo) => toDo.category === "DOING");
    // }
    // if (category === "TODO") {
    //   return toDos.filter((toDo) => toDo.category === "DONE");
    // }
    // return [
    //   toDos.filter((toDo) => toDo.category === "TODO"),
    //   toDos.filter((toDo) => toDo.category === "DOING"),
    //   toDos.filter((toDo) => toDo.category === "DONE"),
    // ];
    return toDos.filter((toDo) => toDo.category === category);
  },
});
