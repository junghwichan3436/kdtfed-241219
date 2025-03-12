anime({
  targets: "ul li",
  translateY: (el, i) => {
    if (i % 2 === 0) {
      return 80;
    } else {
      return -80;
    }
  },
  easing: "linear",
  duration: 1500,
  opacity: 0,
  //delay 하면 아이템 을 다가져온다!!
  // delay: (el, i) => {
  //   return i * 300;
  // },
  // delay: 500, //stagger를 쓰면 시차를 두고 무언갈 해라
  delay: anime.stagger(500), // stagger 을 쓰면 앞에서부터 하나씩 시차를 (몇초동안 )무언갈 실행해라
});
