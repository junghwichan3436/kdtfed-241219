import axios from "axios";

const api = axios.create({
  //api라는 인스턴스를 만든것
  baseURL: "https://api.themoviedb.org/3/",
  headers: { "Content-type": "application/json" }, // application에서json을 쓸거야
});

//요청 인터셉터
api.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
    console.log("Request Error", config);
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    console.log("Request Error", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    console.log("Response Get", response);
    return response;
  },
  function (error) {
    console.log("Response Error", error);
    return Promise.reject(error);
  }
);

export default api;
