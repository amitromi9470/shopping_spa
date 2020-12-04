import React from "react";

const Button=(props)=>{
    return(
        <div>
            <input type="button" onClick={props.onClickHandler} value="Log In"/>
        </div>

    )
}
export default Button;