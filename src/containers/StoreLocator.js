import React, { Component } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Map from "../components/Map";
import mapChooser from "../mapChooser";

export default class StoreLocator extends Component {
  constructor(props) {
    super(props);
    this.shops = [
      { location: "Portland", address: "123 Portland Drive" },
      { location: "Astoria", address: "123 Astoria Road" },
      { location: "", address: "" }
    ];
    this.state = {
      currentMap: "none.png"
    };
  }

  chooseMap = event => {
    this.setState({ currentMap: mapChooser(event.target.value) });
  };

  render() {
    const { currentMap } = this.state;
    let storeButtons = this.shops.map((shop, id) => {
      return (
        <Button
          key={id}
          location={shop.location}
          handleClick={this.chooseMap}
        />
      );
    });
    return (
      <div>
        <Header />
        <div>{storeButtons}</div>
        <Map imageName={currentMap} location={this.props.location} />
      </div>
    );
  }
}
