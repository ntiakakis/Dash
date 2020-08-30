const dash = require("./dash");

test("give 1 + 1 and expect 2 as a result", () => {
  expect(dash.add(1, 1)).toBe(2);
});

test("give the area of a triangle", () => {
  expect(dash.triangle.area(3, 4)).toBe(6);
});
