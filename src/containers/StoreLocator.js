import React, { Component } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Map from "../components/Map";
import mapChooser from "../mapChooser";
import axios from "axios";

export default class StoreLocator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMap: "none.png",
      shops: []
    };
  }

  async componentDidMount() {
    let response = await axios.get("http://localhost:3000/data/shops.json");
    this.setState({ shops: response.data.shops });
  }

  chooseMap = event => {
    this.setState({ currentMap: mapChooser(event.target.value) });
  };

  render() {
    const { currentMap, shops } = this.state;
    let storeButtons = shops.map((shop, id) => {
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
