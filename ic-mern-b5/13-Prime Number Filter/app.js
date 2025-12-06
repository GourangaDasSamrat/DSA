function findPrimeNumbers(arr) {
  // Helper function to check if a number is prime
  function isPrime(num) {
    // Numbers less than 2 are not prime
    if (num < 2) return false;

    // 2 is prime
    if (num === 2) return true;

    // Even numbers are not prime
    if (num % 2 === 0) return false;

    // Check odd divisors up to square root of num
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }

    return true;
  }

  // Filter array to keep only prime numbers
  return arr.filter(isPrime);
}

// Test cases
console.log(findPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10]));
// Output: [2, 3, 5, 7]

console.log(findPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));
// Output: [2, 3, 5, 7, 11, 13]

console.log(findPrimeNumbers([15, 16, 17, 18, 19, 20]));
// Output: [17, 19]

console.log(findPrimeNumbers([1, 4, 6, 8, 9, 10]));
// Output: []

console.log(findPrimeNumbers([97, 98, 99, 100, 101]));
// Output: [97, 101]
