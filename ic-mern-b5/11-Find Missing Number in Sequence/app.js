function findMissingNumber(arr) {
  const n = arr.length + 1;

  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

// Test cases
console.log(findMissingNumber([1, 2, 3, 5, 6, 7, 8])); // Output: 4
console.log(findMissingNumber([1, 2, 4, 5, 6])); // Output: 3
console.log(findMissingNumber([2, 3, 4, 5, 6])); // Output: 1
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: 10
