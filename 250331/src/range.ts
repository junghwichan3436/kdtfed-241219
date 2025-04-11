// 선언형방식
const range = (from: number, to: number): number[] => {
  return from < to ? [from, ...range(from + 1, to)] : [];
};

const sample = range(1, 10); //무한반복하다가 9에서 멈춘다
console.log(sample);
