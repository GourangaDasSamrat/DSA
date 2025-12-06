function getMaxProduct(arr) {
  // Handle edge cases
  if (arr.length < 2) {
    return null; // or throw an error
  }

  // Find the two largest and two smallest numbers
  let max1 = -Infinity,
    max2 = -Infinity;
  let min1 = Infinity,
    min2 = Infinity;

  for (let num of arr) {
    // Update two largest numbers
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }

    // Update two smallest numbers
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  // Return the maximum of:
  // 1. Product of two largest numbers
  // 2. Product of two smallest numbers (could be large if both negative)
  return Math.max(max1 * max2, min1 * min2);
}

// Test cases
console.log(getMaxProduct([2, 3, 5, 6, 7])); // Output: 42 (6 * 7)
console.log(getMaxProduct([1, 10, 2, 6, 5, 3])); // Output: 60 (10 * 6)
console.log(getMaxProduct([-10, -3, 5, 6, -20])); // Output: 200 (-10 * -20)
console.log(getMaxProduct([-8, -7, -2])); // Output: 56 (-8 * -7)
console.log(getMaxProduct([0, -1, 3, 100])); // Output: 300 (3 * 100)
