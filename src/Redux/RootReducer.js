import { combineReducers } from "redux";
import AllValues from "../Reducers/AllValues";
import NationValue from "../Reducers/NationValue";

const combineReducer1 = combineReducers({
  AllValues,
  NationValue,
});

export default combineReducer1;
