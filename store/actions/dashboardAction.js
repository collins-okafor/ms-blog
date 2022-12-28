import {
  DASHBOARD_ALL_ARTICLE,
  DASHBOARD_LOADER,
  DASHBOARD_SINGLE_POST,
  SINGLE_POST_COMMENT,
  SINGLE_POST_DISLIKE,
  SINGLE_POST_LIKE,
  USER_DETAILS,
} from "../type";

export const getDashboardAllArticle = (param) => (dispatch) => {
  dispatch({ type: DASHBOARD_ALL_ARTICLE, payload: param });
};

export const getDashboardLoader = (param) => (dispatch) => {
  dispatch({ type: DASHBOARD_LOADER, payload: param });
};

export const getDashboardSinglePost = (param) => (dispatch) => {
  dispatch({ type: DASHBOARD_SINGLE_POST, payload: param });
};

export const getUserDetails = (param) => (dispatch) => {
  dispatch({ type: USER_DETAILS, payload: param });
};

export const getSinglePostComment = (param) => (dispatch) => {
  dispatch({ type: SINGLE_POST_COMMENT, payload: param });
};

export const getSinglePostLike = (param) => (dispatch) => {
  dispatch({ type: SINGLE_POST_LIKE, payload: param });
};

export const getSinglePostDisLike = (param) => (dispatch) => {
  dispatch({ type: SINGLE_POST_DISLIKE, payload: param });
};
