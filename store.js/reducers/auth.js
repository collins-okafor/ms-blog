import { lOGINPAGECOUNTER } from "../type";

const initialState = {
  loginPageCounter: {},
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case lOGINPAGECOUNTER: {
      return {
        ...state,
        loginPageCounter: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
