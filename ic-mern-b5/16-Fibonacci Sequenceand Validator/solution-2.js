// Task 2: Check if a number is a Fibonacci number

function isFibonacciNumber(num) {
  // Negative numbers are not Fibonacci numbers
  if (num < 0) {
    return false;
  }

  // 0 and 1 are Fibonacci numbers
  if (num === 0 || num === 1) {
    return true;
  }

  // Generate Fibonacci sequence until we reach or exceed the number
  let prev = 0;
  let curr = 1;

  while (curr < num) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  // Check if we found the exact number
  return curr === num;
}

// Alternative method using mathematical property:
// A number is Fibonacci if one or both of (5*n^2 + 4) or (5*n^2 - 4) is a perfect square
function isFibonacciNumberMath(num) {
  if (num < 0) {
    return false;
  }

  function isPerfectSquare(x) {
    const sqrt = Math.sqrt(x);
    return sqrt === Math.floor(sqrt);
  }

  return (
    isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4)
  );
}

// Test cases
console.log("Testing isFibonacciNumber:");
console.log("isFibonacciNumber(0):", isFibonacciNumber(0)); // true
console.log("isFibonacciNumber(5):", isFibonacciNumber(5)); // true
console.log("isFibonacciNumber(8):", isFibonacciNumber(8)); // true
console.log("isFibonacciNumber(21):", isFibonacciNumber(21)); // true
console.log("isFibonacciNumber(4):", isFibonacciNumber(4)); // false
console.log("isFibonacciNumber(10):", isFibonacciNumber(10)); // false
console.log("isFibonacciNumber(100):", isFibonacciNumber(100)); // false
