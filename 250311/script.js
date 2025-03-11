import { weathermap, unsplash } from "./env.js"; //두개의 값을 찾아와서 써야하기 때문에 중광호를 써서 찾아왔다

const getcurrentWeather = (latitude, longitude) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weathermap}&units=metric`;

  fetch(URL)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      const city = document.querySelector(".city");
      const weather = document.querySelector(".weather");
      const temp = document.querySelector(".temp");
      const icon = document.querySelector(".icon");

      let cityName;
      switch (result.name) {
        case "Jamwon-dong":
          cityName = "역삼동";
          break;
      }

      let weatherInfo;
      switch (result.weather[0].main) {
        case "Haze":
          weatherInfo = "안개";
          break;
      }

      city.innerText = cityName;
      weather.innerText = weatherInfo;
      temp.innerText = `${result.main.temp} ℃`;
      icon.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
    });
};

// if (window.navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(); //윈도우 생략 가능
// }

const getPosition = (position) => {
  // console.log(position);

  const { latitude, longitude } = position.coords; //latitude는 coords안에있는 객체이기 때문에 {}를 써주어야한다
  getcurrentWeather(latitude, longitude);
};

const errorHandle = (error) => {
  console.log(error);
};

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandle); //윈도우 생략 가능
} else {
  console.log("geolocation is not available"); //침수가 되면 location을 찾아오는 것이 사라질 수 있따
}

const imgURL = `https://api.unsplash.com/photos/random?client_id=${unsplash}`; //https://api.unsplash.com이건 공통이고 photos/random이건 랜덤 url이고 client_id=${unsplash}여기가 개인 아이디 값이다!!

fetch(imgURL)
  .then((response) => response.json())
  .then(({ urls: { full } }) => {
    console.log(full);
    const container = document.querySelector(".container");
    container.style.backgroundImage = `url(${full})`;
  });
