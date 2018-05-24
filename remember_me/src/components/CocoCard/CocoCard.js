import React from "react";
import "./CocoCard.css";

const CocoCard = props => (
    <div className="card">
        <div className="img-container" id={props.key} onClick={props.handleIncrement} className="remove">
                <img alt={props.name} src={props.image} />
        </div> 
        <span onClick={props.handleIncrement} className="remove">
            𝘅
        </span>
        
    </div>
    
)

export default CocoCard; 