const { Square, Circle, Triangle } = require("../lib/shapes");

describe("Logo", () => {
  it("should properly display the triangle shape points", () => {
    //arrange
    const shape = new Triangle();
    shape.setColor("blue");
    //act

    //assert
    expect(shape.render()).toEqual(
      `<polygon points="150 0, 0 160, 300 160" fill="blue"/>`
    );
  });
  it("should properly display the circle shape points", () => {
    //arrange
    const shape = new Circle();
    shape.setColor("red");
    //act

    //assert
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="100" r="90" fill="red" />`
    );
  });
  it("should properly display the Square shape points", () => {
    //arrange
    const shape = new Square();
    shape.setColor("green");
    //act

    //assert
    expect(shape.render()).toEqual(
      `<rect x="50" y="10" width="200" height="200" fill="green"/>`
    );
  });
});
