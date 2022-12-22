import APIs from "./api";

const DashBoardServices = {
  GetAllDashArticle: () => {
    return APIs.get("/api/write/article").then((data) => {
      if (data?.data?.message === "success") {
        return data.data;
      }
    });
  },

  getDashSingleArticle: (id) => {
    return APIs.get(`/api/write/article/${id}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          console.log(data);
          return data?.data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },
};

export default DashBoardServices;
