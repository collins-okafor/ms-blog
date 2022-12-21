import { DASHBOARD_ALL_ARTICLE, DASHBOARD_LOADER } from "../type";

export const getDashboardAllArticle = (param) => (dispatch) => {
  dispatch({ type: DASHBOARD_ALL_ARTICLE, payload: param });
};

export const getDashboardLoader = (param) => (dispatch) => {
  dispatch({ type: DASHBOARD_LOADER, payload: param });
};
