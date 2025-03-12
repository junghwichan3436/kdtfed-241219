const path = anime.path(".svg path"); //path가 눕기를 따야하는 대상

anime({
  targets: ".svg1 path",
  easing: "easeInOutSine",
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: 10000,
  delay: anime.stagger(250),
  loop: true,
  direction: "alternate", //그렸다가 다시지우는 반복 애니메이션
});
