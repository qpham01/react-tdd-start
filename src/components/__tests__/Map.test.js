import React from "react";
import { shallow } from "enzyme";
import Map from "../Map";
import { NONAME } from "dns";

describe("Map", () => {
  let mountedMap;
  beforeEach(() => {
    mountedMap = shallow(<Map />);
  });
  it("renders without crashing", () => {
    let map = shallow(<Map />);
  });
  it("contains a map image", () => {
    const imgs = mountedMap.find("img");
    expect(imgs.length).toBe(1);
  });
  it("contains none.png when given no input", () => {
    const defaultMap = mountedMap.find("[src='images/none.png']");
    expect(defaultMap.length).toBe(1);
  });
});
