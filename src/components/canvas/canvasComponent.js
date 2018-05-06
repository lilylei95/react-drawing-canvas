import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactCursorPosition from "react-cursor-position";
import DrawingCanvas from "./canvas";

class CanvasComponent extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();

    this.clearCanvas = this.clearCanvas.bind(this);
  }

  clearCanvas() {
    this.child.current.clearCanvas();
  }

  render() {
    return (
      <React.Fragment>
        <ReactCursorPosition>
          <DrawingCanvas
            ref={this.child}
            canvasObject={this.props.canvasObject}
            setCtx={this.setCtx}
          />
        </ReactCursorPosition>
        <button className="clear-canvas-button" onClick={this.clearCanvas}>
          Clear
        </button>
      </React.Fragment>
    );
  }
}

export default CanvasComponent;
