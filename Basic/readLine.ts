/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 */

const miniMaxSum = (arr: number[]) => {
  arr.sort((a, b) => a - b);
  const minSum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0);
  const maxSum = arr.slice(1, 5).reduce((sum, num) => sum + num, 0);
  console.log(`${minSum} ${maxSum}`);
};

const arr1 = [1, 3, 5, 7, 2];
miniMaxSum(arr1);








