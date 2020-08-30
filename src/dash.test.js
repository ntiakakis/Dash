const dash = require("./dash");

test("give 1 + 1 and expect 2 as a result", () => {
  expect(dash.add(1, 1)).toBe(2);
});

test("give the area of a triangle", () => {
  expect(dash.triangle.area(3, 4)).toBe(6);
});

test("give the maximum", () => {
  expect(dash.statistics.max(5, 10)).toBe(10);
});

test("give the minimum", () => {
  expect(dash.statistics.min(5, 10)).toBe(5);
});

test("give the average", () => {
  expect(dash.statistics.avg(1, 2)).toBe(1.5);
});
