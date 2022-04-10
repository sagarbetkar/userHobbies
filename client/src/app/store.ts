import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { hobbiesReducer } from "../features/hobby/hobbiesReducer";
import { usersReducer } from "../features/user/usersReducer";
import apiMiddleware from "./apiMiddleware";


const store = createStore(
  combineReducers({
    users: usersReducer,
    hobbies: hobbiesReducer
  }),
  applyMiddleware(thunk, apiMiddleware)
);

export default store;