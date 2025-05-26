import { create } from "zustand";

//객체의 값을 반환하기 위해 중괄호 위에 소괄호를 썻다
//소괄호를 빼고 그냥쓰면 실행문으로 써의 값을 반환하는 것이다
const counterStore = create((set) => ({
  count: 1,
  increase: () => set((state) => ({ count: state.count + 1 })),
  //여기서 state는 count를 의미한다
  //set도 콜백함수인데 여기서 또콜백함수를 받을 수 있고 여기서 반환된 값이 사용된다
  decrease: () => set((state) => ({ count: state.count - 1 })),
  increseBy: (value) =>
    set((state) => ({
      count: state.count + value,
    })),
}));

export default counterStore;
