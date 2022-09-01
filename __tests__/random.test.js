const randomNumber = require("../lib/random.js");

test("gets a number between 1 and 10", () => {
  expect(randomNumber()).toBeGreaterThanOrEqual(1);
  expect(randomNumber()).toBeLessThanOrEqual(10);
});
