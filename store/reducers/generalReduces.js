import { DYNAMIC_POST } from "../type";

const initialState = {
  dynamicPost: [],
};

const generalReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case DYNAMIC_POST: {
      return {
        ...state,
        dynamicPost: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default generalReducer;
