import React from "react";
import "./Card.css";
//import logo1 from "../Assets/online-shopping.jpg";
import Buttonforcart from "../Buttonforcart/Buttonforcart";

const Card=(props)=>{

    const imgStyle={
        height: '120px',
        width: '200px'
    }
    return(
        <div className="Card">
            <div>
            <img src={props.logo} style={imgStyle} alt="dummy"/>
                <h1><b>{props.ProductName}</b></h1>
                <p><b>{props.ProductDescription}</b></p>
                <div className="flex-c">
                    <p>{props.Rating}</p>
                    <p><b>{props.Price}</b></p>
                </div>
                <Buttonforcart/>
            </div>
        </div>
        
    )
}

export default Card;