import mapChooser from "../mapChooser";

describe("mapChooser", function() {
  it("returns portland.jpg when given input portland", function() {
    let expected = "portland.jpg";
    let actual = mapChooser("portland");
    expect(actual).toEqual(expected);
  });
  it("returns astoria.jpg when given input astoria", function() {
    let expected = "astoria.jpg";
    let actual = mapChooser("astoria");
    expect(actual).toEqual(expected);
  });
  it("returns a default image when given no input", function() {
    let expected = "default.jpg";
    let actual = mapChooser("");
    expect(actual).toEqual(expected);
  });
});
