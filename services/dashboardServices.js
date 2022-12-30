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

  getOthersUserDetails: (username) => {
    return APIs.get(`/api/user/${username}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  editUserDetails: (payload) => {
    return APIs.patch(`/api/user/user_details`, payload)
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

  getSavePostCount: () => {
    return APIs.get(`/api/savedpost/saved_count`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getOtherUserSavePostCount: (userId) => {
    return APIs.get(`/api/savedpost/saved_count/${userId}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  deleteSavedPost: (postId) => {
    return APIs.delete(`/api/savedpost/${postId}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  createFollowers: (payload) => {
    return APIs.post(`/api/following/create_followers`, payload)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getAllFollowing: () => {
    return APIs.get(`/api/following/create_followers`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getFollowerCount: () => {
    return APIs.get(`/api/following/follower_count`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getOtherUserFollowerCount: (userId) => {
    return APIs.get(`/api/following/follower_count/${userId}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  deleteFollowing: (id) => {
    return APIs.delete(`/api/following/${id}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getNotificationOfFollowers: (id) => {
    return APIs.get(`/api/following/notificate_followers`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getOtherUserArticle: (id) => {
    return APIs.get(`/api/write/notify/${id}`)
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
