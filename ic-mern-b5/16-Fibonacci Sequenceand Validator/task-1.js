// Task 1: Generate Fibonacci Sequence

function fibonacciSequence(n) {
  // Handle edge cases
  if (n <= 0) {
    return [];
  }

  if (n === 1) {
    return [0];
  }

  // Initialize array with first two Fibonacci numbers
  const sequence = [0, 1];

  // Generate remaining numbers
  for (let i = 2; i < n; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }

  return sequence;
}

// Test cases
console.log("fibonacciSequence(8):");
console.log(fibonacciSequence(8));
// Expected: [0, 1, 1, 2, 3, 5, 8, 13]

console.log("\nfibonacciSequence(1):");
console.log(fibonacciSequence(1));
// Expected: [0]

console.log("\nfibonacciSequence(10):");
console.log(fibonacciSequence(10));
// Expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.log("\nfibonacciSequence(15):");
console.log(fibonacciSequence(15));
// Expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
