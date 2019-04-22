import {CHANGE_INPUT_VALUE,CHANGE_HEADER} from './actiontype'
import { Tool } from "../Config/Tool.jsx";


/*=================
 action.jsx
 派发 action
 ==================*/

/**
 * 派发初始化数据
 * @param path
 * @param json
 * @returns {{type: string, path: *, data: *}}
 */
export const dispatchInitData = (path, json) => {
    return {
      type: "DispatchInitData",
      path: path,
      data: json
    };
  };
  /**
   * 初始化数据
   * @param path
   * @param data
   * @returns {Function}
   */
  export const fetchInitData = (path, data) => {
    return dispatch => {
      Tool.fetchData_P(path, data, responseData => {
        return dispatch(dispatchInitData(path, responseData));
      });
    };
  };
  

export const inputchangeAction=(value)=>{
    return {
            type:CHANGE_INPUT_VALUE,
            value:value
    }
};
export const headerchangeAction=(value)=>({
    type:CHANGE_HEADER,
    value:value
})
export const isshowchangeAction=(value)=>({
  type:'change_isShow',
  value:value
})
export const saveloginAction=(value)=>{
    return {
      type:'savelogin',
      value:value
    }
}

