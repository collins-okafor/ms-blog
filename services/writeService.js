import APIs from "./api";

const WriteService = {
  postArticle: async (params) => {
    return APIs.post(`/api/read/article`, params).then((data) => {
      console.log(data, "resent work");
      return data.data.data;
    });
  },
};

export default WriteService;
