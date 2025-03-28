// 사용자정의의 타입가드
/// type Dog = {
//   name: string;
//   isBark: boolean;
// };

// type Cat = {
//   name: string;
//   isScrath: boolean;
// };

// type Animal = Dog | Cat;
// const warning = (animal: Animal) => {
//   if ("isBark" in animal) {
//     console.log(animal.isBark ? "짖습니다" : "안짖습니다");
//   } else if ("isScratch" in animal) {
//     console.log(animal.isScratch ? "합큅니다" : "안할큅니다");
//   }
// };

const isDog = (animal: Animal): animal is Dog => {
  return (animal as Dog).isBark !== undefined;
};

const isCat = (animal: Animal): animal is Cat => {
  return (animal as Cat).isScratch !== undefined;
};

const warning = (animal: Animal) => {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖습니다" : "안짖습니다");
  } else {
    console.log(animal.isBark ? "할큅니다" : "안할큅니다");
  }
};
