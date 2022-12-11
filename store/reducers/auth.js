import { ALLOWED_ACCESS, LOGIN, lOGINPAGECOUNTER, LOGOUT } from "../type";

const initialState = {
  token: (typeof window !== "undefined" && localStorage.getItem("token")) || "",
  isLoggedIn:
    false ||
    (typeof window !== "undefined" && localStorage.getItem("isLoggedIn")),
  loginPageCounter: {},
  user: {},
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

    case ALLOWED_ACCESS: {
      return {
        ...state,
        isLoggedIn: payload,
      };
    }

    case LOGIN: {
      return {
        ...state,
        token: payload.token,
        isLoggedIn: true,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        user: {},
        token: "",
        isLoggedIn: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
