import { combineReducers } from "redux";
import { visitReducer } from "./visit.reducer";


export default combineReducers({
  toVisit: visitReducer,
})
