function findMedian(arr) {
  // Handle empty array
  if (arr.length === 0) {
    return null;
  }

  // Sort the array in ascending order
  const sorted = [...arr].sort((a, b) => a - b);

  const mid = Math.floor(sorted.length / 2);

  // If odd length, return middle element
  if (sorted.length % 2 !== 0) {
    return sorted[mid];
  }

  // If even length, return average of two middle elements
  return (sorted[mid - 1] + sorted[mid]) / 2;
}

// Test cases
console.log(findMedian([5, 2, 8, 1, 9])); // Output: 5
console.log(findMedian([4, 2, 7, 1, 9, 10])); // Output: 5.5
console.log(findMedian([1])); // Output: 1
console.log(findMedian([3, 3, 3, 3])); // Output: 3
console.log(findMedian([10, 20, 30])); // Output: 20
