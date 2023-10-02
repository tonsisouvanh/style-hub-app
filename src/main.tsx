import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>
);
