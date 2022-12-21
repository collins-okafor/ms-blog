import APIs from "./api";

const DashBoardServices = {
  GetAllDashArticle: () => {
    return APIs.get("/api/write/article").then((data) => {
      if (data?.data?.message === "success") {
        return data.data;
      }
    });
  },
};

export default DashBoardServices;
