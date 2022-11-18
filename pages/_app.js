import "../styles/globals.css";
import React, { createContext, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { wrapper } from "../store.js";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../lib/globalStyles";
import { theme } from "../lib/theme";
import Head from "next/head";
import Nav from "../universal-Components/Nav";

const ThemeContext = createContext();

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const system_mode = useSelector((state) => state.authReducer.system_mode);

  const current = system_mode ? theme.DarkColor : theme.LightColor;

  const HandleThemeProvider = () => {
    dispatch(getSystemMode(!system_mode));
  };

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ HandleThemeProvider }}>
        <ThemeProvider theme={current}>
          <GlobalStyles />
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />

            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="true"
            />

            <link
              href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Montserrat:wght@600&family=PT+Serif:wght@400;700&display=swap"
              rel="stylesheet"
              crossOrigin="true"
            />
          </Head>

          <Nav />

          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
