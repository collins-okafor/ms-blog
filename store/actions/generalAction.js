import { DYNAMIC_POST } from "../type";

export const getDynamicPost = (param) => (dispatch) => {
  dispatch({ type: DYNAMIC_POST, payload: param });
};
