import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
  render() {
    const { location, handleClick } = this.props;
    return (
      <button
        value={location}
        onClick={handleClick}
        className="location-button"
      >
        {location ? location : "All Locations"}
      </button>
    );
  }
}
