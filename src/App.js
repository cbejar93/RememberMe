import React, { Component } from 'react';
import cocos from "./coco.json"
import Header from "./components/Header"
import "./app.css"
import CocoCard from "./components/CocoCard"
import shuffle  from "shuffle-array";

class App extends Component {
  state = {
    cocos,
    counter: 0,
    currentGame: 1,
  }; 

  endGame = () => {
    this.setState({counter: 0});
    this.setState({currentGame: this.state.currentGame +1});
    this.forceUpdate();

  }

  
  
  shuffleImage = () => {
    shuffle(cocos)
    console.log(cocos);
  };

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ counter: this.state.counter + 1 });
  }
  // handleTouch = (id, x) => {
  //   const cocorons = this.state.cocos.filter(coco=> coco.id == id)
  // };  
  render() { 
    return (
      <div>
        <Header counter={this.state.counter} />
        <div className="container">
          <div className="row">
            {this.state.cocos.map(coco => (
            <CocoCard
            shuffleImage={this.shuffleImage}
            endGame = {this.endGame}
            key={coco.id}
            name={coco.name}
            image={coco.image}
            handleIncrement={this.handleIncrement}
            currentGame ={this.state.currentGame}j
            />      
            ))}
          </div>
      </div>
     </div> 
    );
  } 
}

export default App;
