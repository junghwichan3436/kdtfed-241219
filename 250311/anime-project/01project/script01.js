anime({
  targets: ".box1",
  translateX: 100,
  easing: "easeInOutBounce",
  background: "#000",
  loop: true,
  direction: "alternate",
  borderRadius: "50%",
});

anime({
  targets: ".box2",
  translateX: 280,
  translateY: 300,
  easing: "easeOutBounce",
  loop: true,
  direction: "alterante",
  delay: 1000,
});

anime({
  targets: ".box3",
  translateX: {
    value: 400,
    duration: 1000,
    delay: 1000,
  },
  rotate: {
    value: 360, //각도
    duration: 5000, //각도가 돌아가는 시간
  },
});
