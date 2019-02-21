import mapChooser from "../mapChooser";

describe("mapChooser", function() {
  it("returns portland.png when given input portland", function() {
    let expected = "portland.png";
    let actual = mapChooser("portland");
    expect(actual).toEqual(expected);
  });
  it("returns astoria.png when given input astoria", function() {
    let expected = "astoria.png";
    let actual = mapChooser("astoria");
    expect(actual).toEqual(expected);
  });
  it("returns a default image when given no input", function() {
    let expected = "none.png";
    let actual = mapChooser("");
    expect(actual).toEqual(expected);
  });
});
