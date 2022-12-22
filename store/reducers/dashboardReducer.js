import {
  DASHBOARD_ALL_ARTICLE,
  DASHBOARD_LOADER,
  DASHBOARD_SINGLE_POST,
} from "../type";

const initialState = {
  dashboardAllArticle: {},
  DashboardLoader: true,
  dashboardSinglePost: {},
};

const DashboardReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
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

    default: {
      return state;
    }
  }
};

export default DashboardReducers;
