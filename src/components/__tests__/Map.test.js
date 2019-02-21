import React from "react";
import { shallow } from "enzyme";
import Map from "../Map";
import { NONAME } from "dns";

describe("Map", () => {
  let mountedMap;
  beforeEach(() => {
    mountedMap = shallow(<Map imageName="testmap.png" />);
  });
  it("renders without crashing", () => {
    let map = shallow(<Map />);
  });
  it("contains a map image", () => {
    const imgs = mountedMap.find("img");
    expect(imgs.length).toBe(1);
  });
  it("contains none.png when given no input", () => {
    let defaultMap = shallow(<Map />);
    const images = defaultMap.find("[src='images/none.png']");
    expect(images.length).toBe(1);
  });
  it("display the map named by property imageName", () => {
    const images = mountedMap.find("img");
    expect(images.length).toBe(1);
    expect(images.prop("src")).toEqual("images/testmap.png");
  });
});
