const dash = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  division: (a, b) => {
    return a / b;
  },
  triangle: {
    area: (b, h) => {
      return 0.5 * (b * h);
    },
  },
};

module.exports = dash;
