import React, { Component } from 'react';
import coco from "./coco.json"
import Header from "./components/Header"

class App extends Component {
  state = {
    coco,
    counter: 0
  };       
  render() {
    return (
      <Header />
    );
  }
    
}

export default App;
