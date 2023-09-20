class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
  }
}
class Square extends Shape {
  render() {
    return `<rect x="50" y="10" width="200" height="200" fill="${this.color}"/>`;
  }
}
class Triangle extends Shape {
  render() {
    return `<polygon points="150 0, 0 160, 300 160" fill="${this.color}"/>`;
  }
}
class Logo {
  constructor(text, textColor, shape) {
    if (text.length > 3) {
      throw new Error("`text` must contain 3 characters or less. ");
    }
    this.textColor = textColor;
    this.text = text;
    this.shape = shape.render();
  }

  render() {
    return `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
   <rect width="100%" height="100%" fill="white" />

   ${this.shape}
  
   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`;
  }
}

module.exports = { Logo, Circle, Square, Triangle, Shape };
