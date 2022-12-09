import axios from "axios";

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
    }
    if (err.response?.status === 501) {
    }
  }
);

export default APIs;
