const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./src/client/js/main.js", //이파일을 번들링 하겠다
  mode: "development",
  plugins: [new MiniCssExtractPlugin({ filename: "css/style.css" })],
  output: {
    filename: "js/script.js",
    path: path.resolve(__dirname, "assets"),
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
