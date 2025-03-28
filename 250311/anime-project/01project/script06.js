const path = anime.path(".svg path"); //path가 눕기를 따야하는 대상

anime({
  targets: ".circle",
  translateX: path("x"),
  translateY: path("y"),
  easing: "linear",
  duration: 10000,
  loop: true,
});
