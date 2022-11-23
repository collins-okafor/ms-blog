import { combineReducers } from "redux";
import authReducer from "./reducers/auth";
import landingPageReducer from "./reducers/landingPageReducer";

export default combineReducers({ authReducer, landingPageReducer });
