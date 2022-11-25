import { lOGINPAGECOUNTER } from "../type";

export const getLoginPageCounter = (param) => (dispatch) => {
  dispatch({ type: lOGINPAGECOUNTER, payload: param });
};
