import { SYSTEM_MODE, LOGINPAGECOUNTER } from "../type";

const initialState = {
  system_mode: false,
  loginPageCounter: {},
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SYSTEM_MODE: {
      return {
        ...state,
        system_mode: payload,
      };
    }

    case LOGINPAGECOUNTER: {
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
