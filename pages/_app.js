import "../styles/globals.css";
import React, { createContext, useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { wrapper } from "../store";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../lib/globalStyles";
import { theme } from "../lib/theme";
import Head from "next/head";
import Nav from "../universal-Components/Nav";
import Footer from "../universal-Components/Footer";
import ScrollingNav from "../universal-Components/ScrollingNav";
import SideBar from "../universal-Components/sideBar";
import { getSystemMode } from "../store/actions/landingPageAction";
import DashboardSideBar from "../universal-Components/DashboardSideBar";
import { useRouter } from "next/router";
import DashboardSideBarMin from "../universal-Components/DashboardSideBarMin";
import DashboardNavBar from "../universal-Components/DashboardNavBar";
import OpeningModalSwitcher from "../universal-Components/openingModalSwitcher";
import { REDUCE_SIDEBAR } from "../store/type";
import "../lib/globalStyles/global.css";
import ProtectedRoute from "../Authentication/ProtectedRoute";
import { ToastContainer } from "react-toastify";
// import connectDB from "../Server/db/connect";

export const ThemeContext = createContext();

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const reduceSideBar = useSelector(
    (state) => state.DashboardConditionReducers.reduceSideBar
  );

  const dispatch = useDispatch();
  const system_mode = useSelector(
    (state) => state.landingPageReducer.system_mode
  );

  const current = system_mode ? theme.DarkColor : theme.LightColor;

  const HandleThemeProvider = () => {
    dispatch(getSystemMode(!system_mode));
  };

  useEffect(() => {
    if (window.screen.width <= 1024) {
      dispatch({ type: REDUCE_SIDEBAR, payload: true });
    }
  }, []);

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

          {!router.asPath.includes("dashboard") && <ScrollingNav />}

          {!router.asPath.includes("dashboard") && <Nav />}

          {!router.asPath.includes("dashboard") && <SideBar />}

          {router.asPath.includes("dashboard") && <DashboardSideBar />}

          {router.asPath.includes("dashboard") && <DashboardSideBarMin />}

          {router.asPath.includes("dashboard") && <DashboardNavBar />}

          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>

          <ToastContainer />
          <OpeningModalSwitcher />
          {!router.asPath.includes("dashboard") && <Footer />}
        </ThemeProvider>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
