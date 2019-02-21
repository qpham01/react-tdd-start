import React from "react";
import { shallow } from "enzyme";
import StoreLocator from "../StoreLocator";

let mountedStoreLocator;
beforeEach(() => {
  mountedStoreLocator = shallow(<StoreLocator />);
});

describe("Store", () => {
  it("renders without crashing", () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
  });
  it("renders a header", () => {
    const headers = mountedStoreLocator.find("Header");
    expect(headers.length).toBe(1);
  });
  it("renders two buttons", () => {
    const buttons = mountedStoreLocator.find("Button");
    expect(buttons.length).toBe(3);
  });
  it("renders a map", () => {
    const maps = mountedStoreLocator.find("Map");
    expect(maps.length).toBe(1);
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
