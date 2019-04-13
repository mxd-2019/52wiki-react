import Immutable from "immutable";
import { ComStr } from "../Config/ComStr.jsx";
/*=================
 reducer.jsx
 接收Action 并作出处理
 ==================*/
 const login=Immutable.Map({
     token:''
 })
export const Login = (
  state = login,
  action = {}
) => {
  switch (action.type) {
    case "save_token":
      return state.setIn('token',action.data);
    default:
      return state;
  }
};
