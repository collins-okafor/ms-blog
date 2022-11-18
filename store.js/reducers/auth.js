import { SYSTEM_MODE } from "../type";

const initialState = {
  system_mode: false,
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
    default: {
      return state;
    }
  }
};

export default authReducer;
