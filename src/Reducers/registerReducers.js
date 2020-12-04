export default (state=[],action)=>{
    switch(action.type){
        case "USER_REGISTRATION" : {
            return [action.payload,...state]
        }
        default : {
            return state;
        }


    }

}