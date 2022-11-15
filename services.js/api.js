import axios from "axios";
import store from "../store";
import { loader, loginError, logout } from "../store/actions/auth";
import { CREATE_TRADE_ERROR, GET_CHECK_OUT_ERROR } from "../store/types";
import {
  getModalChecker,
  getWalletOtpError,
} from "../store/actions/walletAction";

const APIs = axios.create({
  baseURL: "",
  headers: {
    Accept: "application/json",
    apiKey: "",

    Authorization: `Bearer ${localStorage.getItem("token") ?? ""}`,
  },
});

// Checks for internet connection
APIs.interceptors.request.use(function (config) {
  if (navigator.onLine) {
    return config;
  } else {
    window.location.href = "/404";
    // console.log("There is no internet connection");
    // alert("There is no internet connection");
  }
});

APIs.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.status === 401) {
    }
    if (err.response?.status === 501) {
    }
  }
);

export default APIs;
