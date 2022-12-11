import axios from "axios";
import store from "../store";

if (typeof window !== "undefined") {
}
const APIs = axios.create({
  headers: {
    Accept: "application/json",

    "content-Type": "application/json",

    Authorization:
      typeof window !== "undefined" &&
      `Bearer ${localStorage.getItem("token") ?? ""}`,
  },
});

// Checks for internet connection
// APIs.interceptors.request.use(function (config) {
//   if (navigator.onLine) {
//     return config;
//   } else {
//     window.location.href = "/404";
//     // console.log("There is no internet connection");
//     // alert("There is no internet connection");
//   }
// });

APIs.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.status === 401) {
      if (
        err?.response?.data?.message === "user not exiting" ||
        err?.response?.data?.message === "wrong passwrod"
      ) {
        store.dispatch({
          type: LOGINERROR,
          payload: err?.response?.data?.message,
        });
      }
    }

    if (err.response?.status === 501) {
    }

    console.log(err, "let see");
    if (err.response?.status === 400) {
      console.log(err?.response, "let see");
    }
  }
);

export default APIs;
