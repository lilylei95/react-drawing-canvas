import React, { Component } from "react";
import ReactCursorPosition from "react-cursor-position";
import PropTypes from "prop-types";
import "./canvas.css";

class CanvasComponent extends Component {
  componentDidMount() {
    const ctx = this.refs.canvas.getContext("2d");
    this.setState({
      ctx: ctx
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      clickedX: 0,
      clickedY: 0,
      ctx: null,
      isMouseDown: false,
      prevX: 0,
      prevY: 0
    };

    this.paintDot = this.paintDot.bind(this);
    this.mouseDrag = this.mouseDrag.bind(this);
    this.setMouseUp = this.changeMouseDown.bind(this, false);
    this.setMouseDown = this.setMouseDown.bind(this);
    this.clearCanvas = this.clearCanvas.bind(this);
  }

  clearCanvas() {
    var ctx = this.state.ctx;

    ctx.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
  }

  setMouseDown() {
    console.log("setMouseDown");
    this.changeMouseDown(true);
    this.setState({
      prevX: this.props.position.x,
      prevY: this.props.position.y
    });
  }

  changeMouseDown(mouseDownValue) {
    this.setState({
      isMouseDown: mouseDownValue
    });
  }

  mouseDrag(e) {
    if (this.state.isMouseDown) {
      const ctx = this.state.ctx;

      ctx.beginPath();

      ctx.lineWidth = 5;
      ctx.lineCap = "round";
      ctx.strokeStyle = "#000000";

      ctx.moveTo(this.state.prevX, this.state.prevY);
      ctx.lineTo(this.props.position.x, this.props.position.y);

      ctx.stroke();

      this.setState({
        prevX: this.props.position.x,
        prevY: this.props.position.y
      });
    }
  }

  paintDot(e) {
    if (this.state.ctx === null) {
      console.error("No context to canvas");
    }

    const ctx = this.state.ctx;

    ctx.beginPath();

    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000000";

    ctx.moveTo(this.state.prevX, this.state.prevY);
    ctx.lineTo(this.props.position.x, this.props.position.y);

    ctx.stroke();
  }

  render() {
    return (
      <React.Fragment>
        <canvas
          width={this.props.canvasObject.width + "px"}
          height={this.props.canvasObject.height + "px"}
          ref="canvas"
          onClick={this.paintDot}
          onMouseMove={this.mouseDrag}
          onMouseDown={this.setMouseDown}
          onMouseUp={this.setMouseUp}
        />
      </React.Fragment>
    );
  }
}

export default CanvasComponent;
