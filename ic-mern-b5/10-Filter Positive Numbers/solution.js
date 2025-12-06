function getPositiveNumbers(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result.push(arr[i]);
    }
  }

  return result;
}

// Test
console.log(getPositiveNumbers([2, -5, 10, -3, 8, -1, 0, 7]));
