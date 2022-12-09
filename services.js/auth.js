import APIs from "./api";

const AuthService = {
  register: async (param) => {
    return APIs.post(`/api/signup`, param).then((data) => {
      return data;
    });
  },

  login: async (param) => {
    return APIs.post(`/api/login`, param).then((data) => {
      return data;
    });
  },
};

export default AuthService;
