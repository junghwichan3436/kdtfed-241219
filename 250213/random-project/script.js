// 배경화면을 새로고침 할때마다 바꾸어 주는 것
window.onload = () => {
  const bgCount = 5;
  // random 함수는 0 부터 0.9999까지의 실수를 가져오니까 거기에 5를 곱해주면 4부터 4.99999까지의 실수를 가져오니까 거기에 1을 더해주면 5.99999까지의 실수를 가져오니까 floor을 써서 소수점을 없애줘서 정수로 만들어서 1부터 5까지의 실수를 찾아온다
  let randomNumber = Math.floor(Math.random() * bgCount + 1);
  document.body.style.backgroundImage = `url("./images/bg-${randomNumber}.jpg")`;
};
