import React from "react";
import "./Header.css";

const Header = props => (
    
    <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 d-flex justify-content-center">
                    <h1 className="display-4">Puntuación</h1>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                    <h1 className="display-4">{props.counter}</h1>
                    </div>
                </div>
            </div>
    </div>
)

export default Header;