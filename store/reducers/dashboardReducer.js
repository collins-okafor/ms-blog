import { DASHBOARD_ALL_ARTICLE, DASHBOARD_LOADER } from "../type";

const initialState = { dashboardAllArticle: {}, DashboardLoader: true };

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

    default: {
      return state;
    }
  }
};

export default DashboardReducers;
