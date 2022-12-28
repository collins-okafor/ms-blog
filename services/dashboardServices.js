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
          return data?.data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getUserDetails: () => {
    return APIs.get(`/api/user/user_details`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  PostComment: (postId, params) => {
    return APIs.post(`/api/comment/${postId}`, params)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getAllPostComment: (id) => {
    return APIs.get(`/api/comment/single_post/${id}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getAllPostLike: (postId) => {
    return APIs.get(`/api/like/${postId}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  PostLike: (postId, params) => {
    return APIs.post(`/api/like/${postId}`, params)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getAllPostDisLike: (postId) => {
    return APIs.get(`/api/dislike/${postId}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  PostDisLike: (postId, params) => {
    return APIs.post(`/api/dislike/${postId}`, params)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  SavePost: (postId, params) => {
    return APIs.post(`/api/savedpost/${postId}`, params)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getAllYourSavedPost: (postId) => {
    return APIs.get(`/api/savedpost/saved_post`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },
};

export default DashBoardServices;
