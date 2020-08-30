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
  statistics: {
    percent: (part, whole) => {
      return (part / whole) * 100;
    },
    probability: (n, outcomes) => {
      return n / outcomes;
    },
    avg: (a, b) => {
      return (a + b) / 2;
    },
    min: (a, b) => {
      return a > b ? b : a;
    },
    max: (a, b) => {
      return a > b ? a : b;
    },
  },
};

module.exports = dash;
