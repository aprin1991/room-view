import React, { useEffect } from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { Provider } from "react-redux";
import store from "@redux/store";
import { Container } from "@components";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <Head>
          <meta charSet="iso-8859-2" className="next-head" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=0"
          />
          <meta property="og:title" content="stagemarketplace" />
          <meta property="og:site_name" content="stagemarketplace" />
          <meta property="og:description" content={`Overreacted`} />
          <meta property="og:image" content="/icons/homescreen512.png" />
          <link rel="SHORTCUT ICON" href="/icons/homescreen512.png" />
          <meta name="description" content={`Overreacted`} />
          <meta name="rating" content="Safe For Kids" />
          <meta content="index" name="googlebot" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="Overreacted" />

          <title>Overreacted</title>
          <link rel="app-touch-startup-image" href="/icons/homescreen512.png" />
          <link
            rel="app-touch-icon"
            href="/icons/homescreen512.png"
            sizes="48x48"
          />
          <link
            rel="app-touch-icon"
            href="/icons/homescreen512.png"
            sizes="72x72"
          />
          <link
            rel="app-touch-icon"
            href="/icons/homescreen512.png"
            sizes="96x96"
          />
          <link
            rel="app-touch-icon"
            href="/icons/homescreen512.png"
            sizes="144x144"
          />
          <link
            rel="app-touch-icon"
            href="/icons/homescreen512.png"
            sizes="168x168"
          />
          <link
            rel="app-touch-icon"
            href="/icons/homescreen512.png"
            sizes="192x192"
          />
          <link
            rel="app-touch-icon"
            href="/icons/homescreen512.png"
            sizes="256x256"
          />
          <link
            rel="app-touch-icon"
            href="/icons/homescreen512.png"
            sizes="512x512"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#8b5cf6" />
        </Head>
      </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Provider>
  );
}

export default MyApp;
