import APIs from "./api";
import Cookies from "js-cookie";
import store from "../store";
import { loginAction, allowAccess } from "../store/actions/authAction";

const AuthService = {
  register: async (param) => {
    return APIs.post(`/api/auth/register`, param).then((data) => {
      return data?.data?.data;
    });
  },

  login: async (param) => {
    return APIs.post(`/api/auth/login`, param).then((data) => {
      console.log(data, "to see this");
      if (data?.data?.data?.message === "success") {
        setHeaders(data?.data?.data);
        return data?.data?.data;
      }
    });
  },
};

const setHeaders = async (param) => {
  APIs.defaults.headers["Authorization"] = `Bearer ${param.token}`;
  await store.dispatch(loginAction(param.token));
  await localStorage.setItem("token", param.token);
  await localStorage.setItem("isLoggedIn", true);
  await store.dispatch(allowAccess(true));
};

export default AuthService;
