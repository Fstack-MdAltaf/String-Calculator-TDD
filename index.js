const getSumOfStr = (str) => {
  let sum = 0;
  if (str === "" || str.length === 0) return sum;

  const cleanedStr = str.replace(/[^\d,-]/g, "");
  const numbers = cleanedStr.split(/[,|\n]/);

  for (const item of numbers) {
    const number = Number(item);

    if (number > 0) {
      sum += number;
    }
  }
  return sum;
};

module.exports = getSumOfStr;
