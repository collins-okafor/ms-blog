import { combineReducers } from "redux";
import authReducer from "./reducers/auth";
import landingPageReducer from "./reducers/landingPageReducer";
import DashboardConditionReducers from "./reducers/dashboardConditionReducers";

export default combineReducers({
  authReducer,
  landingPageReducer,
  DashboardConditionReducers,
});
