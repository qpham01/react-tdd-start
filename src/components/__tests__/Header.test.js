import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";
import { longStackSupport } from "q";

describe("Header", () => {
  let mountedHeader;
  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  });

  it("renders without crashing", () => {
    let mountedHeader = shallow(<Header />);
  });
  it("renders a logo", () => {
    const images = mountedHeader.find("img");
    expect(images.length).toBe(1);
    const logos = mountedHeader.find(
      "[src='images/wired-brain-coffee-logo.png']"
    );
    expect(logos.length).toBe(1);
  });
});
