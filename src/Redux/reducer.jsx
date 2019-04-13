import Immutable from "immutable";
import { ComStr } from "../Config/ComStr.jsx";
/*=================
 reducer.jsx
 接收Action 并作出处理
 ==================*/
 const initialstate=Immutable.Map({
   login:{
     cookie:'',
     value: {
      user_name: "",
      user_password: ""
    }
   }
 })
export const GetInitData = (
  state = initialstate,
  action = {}
) => {
  switch (action.type) {
    case "DispatchInitData":
      return state.set("initData", action.data);
    case "save_cookie":
      return state.setIn(['login','cookie'],action.data);
    case "input_change":
      {
        const newstate=state.setIn(['login','value'],action.data)
        console.log(newstate.getIn(['login','value']))
        return newstate
      }
    default:
      return state;
  }
};
