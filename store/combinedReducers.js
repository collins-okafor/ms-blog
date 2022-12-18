import { combineReducers } from "redux";
import authReducer from "./reducers/auth";
import landingPageReducer from "./reducers/landingPageReducer";
import DashboardConditionReducers from "./reducers/dashboardConditionReducers";
import generalReducer from "./reducers/generalReduces";

export default combineReducers({
  authReducer,
  landingPageReducer,
  DashboardConditionReducers,
  generalReducer,
});
