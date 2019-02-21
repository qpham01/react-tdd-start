import React, { Component } from "react";
import "./Map.css";

export default class Map extends Component {
  render() {
    const { imageName, location } = this.props;

    let imagePath = "images/none.png";
    if (imageName) {
      imagePath = `images/${imageName}`;
    }
    return (
      <div className="MapBox">
        <img src={imagePath} alt={location} />
      </div>
    );
  }
}
