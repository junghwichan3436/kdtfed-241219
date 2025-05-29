const delay = async (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, ms); //시간값을 인자값으로 받으면 특정시간이 지나면 이걸 실행시켜라라는 함수
  });
};

export default delay;
//로딩 시간 을 준다
