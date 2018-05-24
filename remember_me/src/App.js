import React, { Component } from 'react';
import cocos from "./coco.json"
import Header from "./components/Header"
import "./app.css"
import CocoCard from "./components/CocoCard"

class App extends Component {
  state = {
    cocos,
    counter: 0
  };     
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ counter: this.state.counter + 1 });
  };  
  render() { 
    return (
      <div>
        <Header counter={this.state.counter} />
        <div className="container">
          <div className="row">
            {this.state.cocos.map(coco => (
            <CocoCard
            key={coco.id}
            name={coco.name}
            image={coco.image}
            handleIncrement={this.handleIncrement}
            />      
            ))}
          </div>
      </div>
     </div> 
    );
  } 
}

export default App;
