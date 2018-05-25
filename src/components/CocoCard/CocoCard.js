import React, {Component } from "react";
import "./CocoCard.css";

class CocoCard extends Component {

    constructor(props) {
        super(props);
            this.state ={
                count: 0,
                currentGame: 1
            }
        
    }

    onClick = (event) => {
        this.checker();
        this.props.shuffleImage();
    }

    checker = () => {
            this.setState({count: this.state.count +1});
            if (this.state.count === 1) {
                this.props.endGame();
              } else {
                this.props.handleIncrement();
              }
    }

    componentWillReceiveProps(nextProps) {
        if(parseInt(nextProps.currentGame) !== parseInt(this.state.currentGame)) {
         this.setState({ count: 0 });
         this.setState({ currentGame: nextProps.currentGame });
         console.log("character reset: ", this.props.name);
        }
      }



render (){
    return (
    <div className="card">
        <div className="img-container" id={this.props.key} onClick={this.onClick} className="remove">
                <img alt={this.props.name} src={this.props.image} height="320px" width="323px" />
        </div>                
    </div>
    )
    }
    
};

export default CocoCard; 