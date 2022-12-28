import APIs from "./api";

const Stories = {
  getMyStories: async () => {
    return APIs.get(`/api/write/my_article`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data?.data;
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  },
};

export default Stories;
