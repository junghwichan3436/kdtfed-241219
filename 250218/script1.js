const character = document.querySelector(".character");

let degree = 0;

const loop = () => {
  const rotation = degree * (Math.PI / 180);
  const targetX = window.innerWidth / 2 - 50 + 100 * Math.cos(rotation);
  const targetY = window.innerHeight / 2 - 50 + 100 * Math.sin(rotation);

  character.style.left = `${targetX}px`;
  character.style.top = `${targetY}px`;

  degree += 1;

  requestAnimationFrame(loop); //본인스스로의 함수를 무한으로 돌린다
  //재귀함수라고 부른다
};

loop();
