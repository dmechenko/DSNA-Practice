const arrayMaxConsecutiveSums = (arr) => {
  let currSum = arr[0];
  let maxSum = currSum;

  for (let i = 1; i < arr.length; i++) {
    currSum = Math.max(currSum + arr[i], arr[i]);
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
};

console.log(arrayMaxConsecutiveSums([-2, 2, 5, -11, 6]));
