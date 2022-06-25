import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "app";
import store from "store";
import "styles/global.scss";

const RootApp = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};
//
const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
root.render(<RootApp />);
