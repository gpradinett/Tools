const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

const operation = (option) => {
  switch (option) {
    case "sum":
      return sum;
    case "sub":
      return sub;
    case "mult":
      return mult;
    case "div":
      return div;
    default:
      return null;
  }
};

const operator = operation.bind(this, "sum")();

console.log(operator(+process.argv[2], +process.argv[3]));
