import React from "react";
import "./style.css";

const Card = props => (

    <div className={props.className} value={props.id} onClick={props.handleClick}>
        <img className="card-img-top" src={props.image} alt={props.name} />
    </div>

)

export default Card;

