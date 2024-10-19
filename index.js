const getSumOfStr = (str) => {
  let sum = 0;
  if (str === "" || str.length === 0) return sum;

  const cleanedStr = str.replace(/[^\d,-]/g, "");
  const numbers = cleanedStr.split(/[,|\n]/);

  if (numbers.length === 1 && !isNaN(Number(numbers[0]))) {
    return Number(numbers[0]);
  }
};

module.exports = getSumOfStr;
