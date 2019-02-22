import React from "react";
import { shallow } from "enzyme";
import StoreLocator from "../StoreLocator";
import axios from "axios";
import renderer from "react-test-renderer";

let mountedStoreLocator;
beforeEach(() => {
  mountedStoreLocator = shallow(<StoreLocator />);
});

describe("StoreLocator", () => {
  it("renders without crashing", () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
  });
  it("renders a header", () => {
    const headers = mountedStoreLocator.find("Header");
    expect(headers.length).toBe(1);
  });

  it("renders a map", () => {
    const maps = mountedStoreLocator.find("Map");
    expect(maps.length).toBe(1);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<StoreLocator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("calls axios.get in #componentDidMount", () => {
    return mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalled();
      });
  });

  it("calls axios.get in #componentDidMount with correct URL", () => {
    return mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalledWith(
          "http://localhost:3000/data/shops.json"
        );
      });
  });

  it("update state with api data", () => {
    return mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        expect(mountedStoreLocator.state()).toHaveProperty("shops", [
          { location: "test location", address: "test address" }
        ]);
      });
  });
});

describe("chooseMap", () => {
  it("Updates this.state.currentMap with location prop", () => {
    const testLand = "testland";
    let wrapper = shallow(<StoreLocator />);
    let mockEvent = { target: { value: testLand } };
    wrapper.instance().chooseMap(mockEvent);
    expect(wrapper.instance().state.currentMap).toBe(testLand + ".png");
  });
});
