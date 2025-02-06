const stars = document.querySelectorAll(".fa-star");
const print = document.querySelector(".print");

stars.forEach((star, index) => {
  console.log(star);
  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      if (i <= index) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
      let message = "";
      let imageURL = "";
      // 스위치문
      switch (index) {
        case 0:
          message = "별로입니다!";
          imageURL = "./img/star-lv1.png";
          break;
        case 1:
          message = "보통이에요!";
          imageURL = "./img/star-lv1.png";
          break;
        case 2:
          message = "그냥그래요!";
          imageURL = "./img/star-lv1.png";
          break;
        case 3:
          message = "맘에들어요!";
          imageURL = "./img/star-lv1.png";
          break;
        case 4:
          message = "아주좋아요요요요요요요!";
          imageURL = "./img/star-lv1.png";
          break;
      }

      print.innerHTML = `<img src="${imageURL}"> ${message}`;
    });
  });
});
