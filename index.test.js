const getSumOfStr = require("./index");

describe("getSumOfStr", () => {
  test("returns 0 for an empty string", () => {
    const str = "";
    const response = getSumOfStr(str);
    expect(response).toBe(0);
  });
});
