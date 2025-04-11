const promise = new Promise<number>((resolve, reject) => {
  //타입을 좁혀주기 위해 number를 썻다 promise 객체는 데이터가 성공할지 않할지 알수 없어서 unknown타입을 반환하는데 우리는 받고자하는 타입을 명확하게 지정해주기 위해서 number라는 제네릭 타입을 지정해주었다
  //promise는 두가지의 함수를 받았다 데이터 통신이 불가능 했다면 reject 가능 했다면 resolve
  setTimeout(() => {
    resolve(20);
  }, 3000); //3초 뒤에 20이라는 값을 전달한다
});

promise.then((response) => {
  console.log(response);
});

promise.catch((error) => {
  //보통 error는 문자열로 들어오기 때문에 any보다는 구체적으로 값을 명확하게 전달하기위해 string이라는 값을 주었다
  if (typeof error === "string") {
    console.error(e);
  }
});
