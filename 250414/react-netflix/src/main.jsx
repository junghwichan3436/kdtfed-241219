import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux"; //값을 제공해주는 역할
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
