import {
  DASHBOARD_ALL_ARTICLE,
  DASHBOARD_LOADER,
  DASHBOARD_SINGLE_POST,
  USER_DETAILS,
  SINGLE_POST_COMMENT,
  SINGLE_POST_LIKE,
  SINGLE_POST_DISLIKE,
} from "../type";

const initialState = {
  dashboardAllArticle: {},
  DashboardLoader: true,
  dashboardSinglePost: {},
  userDetails: {},
  singlePostComment: {},
  singlePostLike: {},
  singlePostDisLike: {},
};

const DashboardReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_DETAILS: {
      return {
        ...state,
        userDetails: payload,
      };
    }

    case DASHBOARD_ALL_ARTICLE: {
      return {
        ...state,
        dashboardAllArticle: payload,
      };
    }

    case DASHBOARD_LOADER: {
      return {
        ...state,
        DashboardLoader: payload,
      };
    }

    case DASHBOARD_SINGLE_POST: {
      return {
        ...state,
        dashboardSinglePost: payload,
      };
    }

    case SINGLE_POST_COMMENT: {
      return {
        ...state,
        singlePostComment: payload,
      };
    }

    case SINGLE_POST_LIKE: {
      return {
        ...state,
        singlePostLike: payload,
      };
    }

    case SINGLE_POST_DISLIKE: {
      return {
        ...state,
        singlePostDisLike: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default DashboardReducers;
