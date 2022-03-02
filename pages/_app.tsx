import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { Provider } from "react-redux";
import store from "@redux/store";
import { Container } from "@components";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Provider>
  );
}

export default MyApp;
