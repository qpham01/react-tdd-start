import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";

describe("Button", () => {
  let mountedButton;

  beforeEach(() => {
    mountedButton = shallow(<Button />);
  });

  it("renders without crashing", () => {
    let button = shallow(<Button />);
  });

  it("renders an html button", () => {
    const buttons = mountedButton.find("button");
    expect(buttons.length).toBe(1);
  });
});

describe("When a location is passed to a button", () => {
  let mountedButton;
  let props;

  beforeEach(() => {
    props = {
      location: "Location1"
    };
    mountedButton = shallow(<Button {...props} />);
  });

  it("displays a location", () => {
    const locName = mountedButton.find(".location-button");
    expect(locName.text()).toEqual("Location1");
  });
});

describe("When a location is passed to a button", () => {
  let mountedButton;
  let props;

  beforeEach(() => {
    props = {
      location: undefined
    };
    mountedButton = shallow(<Button {...props} />);
  });

  it("displays a location", () => {
    const locName = mountedButton.find(".location-button");
    expect(locName.text()).toEqual("All Locations");
  });
});
