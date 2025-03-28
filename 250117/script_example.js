let obj1 = {
  c: 10,
  d: "ddd",
};

let obj3 = {
  e: 15,
  f: "fff",
};

obj1 = obj3;
// console.log(obj3 == obj1);
console.log(obj3, obj1);

// obj3.e = 100;
// console.log(obj3, obj1);
// 오브젝트 3과 오브젝트 1이 같은 주소값을 바라보고
// 있기 때문 에 같은 값을 가져온다
