import Immutable from "immutable";
import { ComStr } from "../Config/ComStr.jsx";




const ctr_panel_pages=Immutable.Map({
        input:'',
        header:''
    })


export const CtrPanel_Pages=(
  state=ctr_panel_pages,
  action)=>{
    switch (action.type) {
            case "change_input_value":
              return state.set('input',action.value);
            case "change_header":
              return state.set('header',action.value);
            default:
              return state;
          }
    
}

const login=Immutable.Map({
  token:true
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

