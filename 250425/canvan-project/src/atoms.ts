import { atom } from "recoil";
export const todoState = atom({
  key: "toDo",
  default: {
    todo: ["a", "b"],
    doing: ["c", "d", "e"],
    done: ["f"],
  },
});
