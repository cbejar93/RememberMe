import React from "react";
import "./CocoCard.css";

const CocoCard = props => (
    <div className="card">
        <div className="img-container" id={props.key} onClick={props.handleIncrement} className="remove">
                <img alt={props.name} src={props.image} height="300px" width="300px" />
        </div>                
    </div>
    
)

export default CocoCard; 