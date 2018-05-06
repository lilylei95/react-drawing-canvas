import React, { Component } from "react";
import CanvasComponent from "./components/canvas/canvasComponent";

var canvasObject = {
  width: 700,
  height: 500
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CanvasComponent canvasObject={canvasObject} />
      </div>
    );
  }
}

export default App;
