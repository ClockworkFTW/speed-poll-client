import React from "react";
import { createRoot } from "react-dom/client";

// App
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Style
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./App.style";

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
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
