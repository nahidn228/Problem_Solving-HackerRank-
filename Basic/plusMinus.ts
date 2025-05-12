/**
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4  are acceptable.
 */


const plusMinus = (arr: number[]): any => {
  let n = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (const num of arr) {
    if (num > 0) {
      positive++;
    } else if (num < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  const positiveRatio = (positive / n).toFixed(6);
  const negativeRatio = (negative / n).toFixed(6);
  const zeroRatio = (zero / n).toFixed(6);
   
  console.log({ positiveRatio, negativeRatio, zeroRatio });
};

const arr = [1, 1, 0, -1, -3];
plusMinus(arr);