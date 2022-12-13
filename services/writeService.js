import APIs from "./api";

const AuthService = {
  postArticle: async (params) => {
    return APIs.post(`/api/article`, params).then((data) => {
      console.log(data, "resent work");
      return data.data.data;
    });
  },
};

export default AuthService;
