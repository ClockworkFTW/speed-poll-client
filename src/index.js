import React from "react";
import { createRoot } from "react-dom/client";

// App
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Style
import { ThemeProvider } from "styled-components";
import { ConfigProvider } from "react-avatar";
import { theme, skltnColors, avatarColors } from "./App.style";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux";
import { injectStore } from "./api";

injectStore(store);

// Render
const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <SkeletonTheme baseColor={skltnColors.b} highlightColor={skltnColors.h}>
          <ConfigProvider colors={avatarColors}>
            <App />
          </ConfigProvider>
        </SkeletonTheme>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
