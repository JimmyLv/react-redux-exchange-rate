import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import rateReducer from "./rate";
import todoReducer from "./todo";

const store = createStore(
  combineReducers({
    rate: rateReducer,
    todo: todoReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
