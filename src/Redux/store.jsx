import { createStore, applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import * as reducer from "./reducer";
// import {combineReducers} from 'redux-immutable'
/*=================
    store.jsx
  中央数据处理器
==================*/
const store = createStore(combineReducers(reducer), applyMiddleware(thunk));
export default store;
