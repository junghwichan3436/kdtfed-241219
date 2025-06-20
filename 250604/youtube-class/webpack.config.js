const { watch } = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  //entry에 들어가고 output 에서 나온다
  entry: {
    //이파일을 번들링 하겠다
    script: "./src/client/js/script.js",
    videoPlayer: "./src/client/js/videoPlayer.js",
    recorder: "./src/client/js/recorder.js",
  },
  mode: "development",
  watch: true, //nodemon이 작동가능하게 해준다
  plugins: [new MiniCssExtractPlugin({ filename: "css/style.css" })],
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
    clean: true, //그 앞전 데이터를 깨끗하게 없애라
  },
  module: {
    //바벨과도 맞춰주기위한 모듈이 필요하다
    rules: [
      {
        test: /\.js$/, // 자바스크립트로 끝나게 되는 확장자들을 바벨도 허용할 수 잇게 해달라
        use: {
          loader: "babel-loader", //바벨과 충돌이 나지 않으면서 프론트 딴에서 사용가능하다
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], //왼쪽에서 부터 읽는다
      },
    ],
  },
};
