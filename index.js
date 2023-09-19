const inquirer = require("inquirer");
const fs = require("fs");
const Logo = require("./lib/shapes");

const questions = [
  {
    type: "input",
    message: "Please enter up to 3 characters",
    name: "text",
  },
  {
    type: "input",
    message: "Please enter a color",
    name: "color",
  },
  {
    type: "list",
    message: "Please pick a shape",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"],
  },
];


function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
  });
  const logo = new Logo(object.text, object.color, object.shape);

  fs.writeFile("logo.svg", logo.render(data), (error, data) =>
    error ? console.error(error) : console.log(data)
  );
}

init();
