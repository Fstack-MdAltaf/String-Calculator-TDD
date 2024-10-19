const getSumOfStr = require("./index");

describe("getSumOfStr", () => {
  test("returns 0 for an empty string", () => {
    const str = "";
    const response = getSumOfStr(str);
    expect(response).toBe(0);
  });
});

test("returns the number for a single input", () => {
  const str = "1";
  const response = getSumOfStr(str);
  expect(response).toBe(1);
});

test("returns the sum for comma-separated numbers", () => {
  const str = "1,5";
  const response = getSumOfStr(str);
  expect(response).toBe(6);
});

test("returns the sum for newline and comma-separated numbers", () => {
  const str = "1\n2,3";
  const response = getSumOfStr(str);
  expect(response).toBe(6);
});

test("handles custom delimiters", () => {
  const str = "//;\n1;2";
  const response = getSumOfStr(str);
  expect(response).toBe(3);
});
