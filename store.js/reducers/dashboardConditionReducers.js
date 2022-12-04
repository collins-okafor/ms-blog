import React from "react";
import { REDUCE_SIDEBAR } from "../type";

const initialState = { reduceSideBar: false };

const DashboardConditionReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REDUCE_SIDEBAR: {
      return {
        ...state,
        reduceSideBar: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default DashboardConditionReducers;
