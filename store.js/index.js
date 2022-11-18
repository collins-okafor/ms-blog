import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./combinedReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";

export const middleware = [thunk];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
