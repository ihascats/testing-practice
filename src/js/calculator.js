const calculator = {
  add(array) {
    return array.reduce((a, b) => a + b);
  },
  subtract(array) {
    return array.reduce((a, b) => a - b);
  },
  divide(array) {
    return array.reduce((a, b) => a / b);
  },
  multiply(array) {
    return array.reduce((a, b) => a * b);
  },
};

export default calculator;
