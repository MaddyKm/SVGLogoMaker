const inquirer = require("inquirer");
const fs = require("fs");
const { Logo, Square, Circle, Triangle } = require("./lib/shapes");

const questions = [
  {
    type: "input",
    message: "Please enter up to 3 characters",
    name: "text",
  },
  {
    type: "input",
    message: "Please enter a text color",
    name: "textColor",
  },
  {
    type: "list",
    message: "Please pick a shape",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    message: "Please enter a shape color",
    name: "color",
  },
];

function init() {
  inquirer.prompt(questions).then((data) => {
    console.log("Generated logo.svg");

    let shape;
    if (data.shape === "Circle") {
      shape = new Circle();
    } else if (data.shape === "Square") {
      shape = new Square();
    } else {
      shape = new Triangle();
    }
    shape.setColor(data.color);
    const logo = new Logo(data.text, data.textColor, shape);

    fs.writeFile("logo.svg", logo.render(), (error, data) =>
      error ? console.error(error) : console.log(data)
    );
  });
}

init();
