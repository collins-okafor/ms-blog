import { SYSTEM_MODE } from "../type";

export const getSystemMode = (param) => (dispatch) => {
  dispatch({ type: SYSTEM_MODE, payload: param });
};

export const getLoginPageCounter = (param) => (dispatch) => {
  dispatch({ type: LOGINPAGECOUNTER, payload: param });
};
