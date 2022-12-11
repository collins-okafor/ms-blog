import APIs from "./api";
import Cookies from "js-cookie";
import store from "../store";
import { loginAction, allowAccess } from "../store/actions/authAction";

const AuthService = {
  register: async (param) => {
    return APIs.post(`/api/signup`, param).then((data) => {
      return data;
    });
  },

  login: async (param) => {
    return APIs.post(`/api/login`, param).then((data) => {
      if (data.data.data.message === "success") {
        setHeaders(data.data.data);
        return data.data.data;
      }
    });
  },
};

const setHeaders = (param) => {
  console.log(param, "our params");
  APIs.defaults.headers["Authorization"] = `Bearer ${param.token}`;
  store.dispatch(loginAction(param.token));
  Cookies.set("token", param.token);
  localStorage.setItem("token", param.token);
  localStorage.setItem("isLoggedIn", true);
  store.dispatch(allowAccess(true));
};

export default AuthService;
