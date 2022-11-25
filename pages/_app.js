import "../styles/globals.css";
import React, { createContext, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { wrapper } from "../store.js";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../lib/globalStyles";
import { theme } from "../lib/theme";
import Head from "next/head";
import Nav from "../universal-Components/Nav";
import Footer from "../universal-Components/Footer";
import ScrollingNav from "../universal-Components/ScrollingNav";
import SideBar from "../universal-Components/sideBar";
import { getSystemMode } from "../store.js/actions/landingPageAction";

export const ThemeContext = createContext();

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const system_mode = useSelector(
    (state) => state.landingPageReducer.system_mode
  );

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
            <link
              rel="preconnect"
              href="https://fonts.googleapis.com"
              crossOrigin="true"
            />

            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="true"
            />

            <link
              href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&family=Nunito:wght@200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
              rel="stylesheet"
              crossOrigin="true"
            />
          </Head>

          <ScrollingNav />

          <Nav />

          <SideBar />

          <Component {...pageProps} />

          <Footer />
        </ThemeProvider>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
