import {combineReducers} from "redux";
import loginReducer from "./loginReducers";
import registerReducer from "./registerReducers";
import cartCountReducers from "./cartCountReducers";

export default combineReducers({
    login:loginReducer,
    register:registerReducer,
    cartCount:cartCountReducers
})
