import Immutable from "immutable";
import { ComStr } from "../Config/ComStr.jsx";




const ctr_panel_pages=Immutable.Map({
        input:'',
        header:'',
        isShow:true
    })


export const CtrPanel_Pages=(
  state=ctr_panel_pages,
  action)=>{
    switch (action.type) {
            case "change_input_value":
              return state.set('input',action.value);
            case "change_header":
              return state.set('header',action.value);
            case "change_isShow":
              return state.set('isShow',action.value);
            default:
              return state;
          }
    
}

const login=Immutable.Map({
  token:true,
  user_name:'test',
  avatar:''
})
export const Login = (
state = login,
action = {}
) => {
  switch (action.type){
    case 'savelogin':
      return state.merge(action.value);
    default:
      return state
  }
    
    
};

