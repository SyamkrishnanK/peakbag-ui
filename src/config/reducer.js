import { actionTypes } from "./action";
import { reducer as reduxFormReducer } from "redux-form";
import { combineReducers } from "redux";

export const getSuccessType = type => `${type}_SUCCESS`;

const stateReducer = (state = { hikes: [] }, action) => {
  switch (action.type) {
    case getSuccessType(actionTypes.FETCHDATA):
      return { ...state, hikes: action.data };
    case getSuccessType(actionTypes.SUBMITHIKE):
      return {
        ...state,
        hikes: [...state.hikes, action.data]
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  state: stateReducer,
  form: reduxFormReducer,
  show: (state = false, action) => {
    switch (action.type) {
      case getSuccessType(actionTypes.SUBMITHIKE):
        return false;
      case "TOGGLEMODAL":
        return action.data;
      default:
        return state;
    }
  }
});

export default rootReducer;
