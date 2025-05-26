import { atom, selector } from "recoil";

export const minutesState = atom({
  key: "minutes",
  default: 60,
});

//상태관리를 hous라는 이름으로 반환하고 싶다
export const hourSelector = selector({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minutesState);
    return minutes / 60;
  }, // state값을 가져와서 넣어준다
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minutesState, minutes);
    //state의 값을 찾아와서 minutes로 바꿔준다

    // set(minutesState, 10);
  }, //state값을 무언가로 세팅하겠다
});

//atom 상태관리 기본 객체로 상태관리한다 key르 먼저쓰고 default를 쓴다
//내입맛에 맛는 맛으로 바꿀려면 selector를 쓴다 selector는 get이라는 함수를 써서 새로운 형태로 반환할 수 있다
//state의 값이변경되면 아래의 값까지 변경되게 해줘
// selector 의값이 변경되면 state의 값도  변경되게 해줘
