import { SHOW_HIDE_SIDEBAR, SYSTEM_MODE } from "../type";

export const getSystemMode = (param) => (dispatch) => {
  dispatch({ type: SYSTEM_MODE, payload: param });
};

export const getShowHideSidebar = (param) => (dispatch) => {
  dispatch({ type: SHOW_HIDE_SIDEBAR, payload: param });
};
