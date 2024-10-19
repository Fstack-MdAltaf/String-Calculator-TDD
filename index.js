const getSumOfStr = (str) => {
  let sum = 0;
  let negativeNumbers = [];
  if (str === "" || str.length === 0) return sum;

  let delimiter = /,|\n/;
  if (str.startsWith("//")) {
    const delimiterEndIndex = str.indexOf("\n");
    delimiter = new RegExp(`[${str.substring(2, delimiterEndIndex)}]`);
    str = str.substring(delimiterEndIndex + 1);
  }
  const numbers = str.split(delimiter);

  for (const item of numbers) {
    const number = Number(item);
    if (number) {
      if (number > 0) {
        sum += number;
      } else {
        negativeNumbers.push(number);
      }
    }
  }
  if (negativeNumbers.length > 0) {
    return new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
  }
  return sum;
};

module.exports = getSumOfStr;
