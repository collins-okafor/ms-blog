import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store.js";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../lib/globalStyles";
import { lightTheme } from "../lib/theme";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Montserrat:wght@600&family=PT+Serif:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
