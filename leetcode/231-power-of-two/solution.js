/**
 * LeetCode 231: Power of Two
 * Given an integer n, return true if it is a power of two. Otherwise, return false.
 */

// Approach 1: Bit Manipulation (Most Efficient - O(1) time, O(1) space)
// Key insight: A power of 2 in binary has exactly one bit set
// For example: 1(1), 2(10), 4(100), 8(1000), 16(10000)
// If n is a power of 2, then n & (n-1) will be 0
var isPowerOfTwo = function(n) {
    // n must be positive and n & (n-1) must be 0
    return n > 0 && (n & (n - 1)) === 0;
};

// Approach 2: Division Method (O(log n) time, O(1) space)
var isPowerOfTwoDiv = function(n) {
    if (n <= 0) return false;
    
    while (n % 2 === 0) {
        n = Math.floor(n / 2);
    }
    
    return n === 1;
};

// Approach 3: Using Math.log2 (O(1) time, O(1) space)
var isPowerOfTwoLog = function(n) {
    if (n <= 0) return false;
    
    // If n is a power of 2, log2(n) should be an integer
    return Number.isInteger(Math.log2(n));
};

// Approach 4: Check against largest power of 2 in 32-bit integer
var isPowerOfTwoLargest = function(n) {
    // 2^30 = 1073741824 is the largest power of 2 in 32-bit signed integer range
    const largestPowerOf2 = 1 << 30; // 2^30
    return n > 0 && largestPowerOf2 % n === 0;
};

// Test cases
console.log("=== Testing Power of Two Solutions ===");

const testCases = [1, 16, 3, 4, 5, 8, 0, -1, 1024, 1073741824];

console.log("\nApproach 1 - Bit Manipulation (Recommended):");
testCases.forEach(n => {
    console.log(`isPowerOfTwo(${n}) = ${isPowerOfTwo(n)}`);
});

console.log("\nApproach 2 - Division Method:");
testCases.forEach(n => {
    console.log(`isPowerOfTwoDiv(${n}) = ${isPowerOfTwoDiv(n)}`);
});

console.log("\nApproach 3 - Math.log2 Method:");
testCases.forEach(n => {
    console.log(`isPowerOfTwoLog(${n}) = ${isPowerOfTwoLog(n)}`);
});

console.log("\nApproach 4 - Largest Power of 2 Method:");
testCases.forEach(n => {
    console.log(`isPowerOfTwoLargest(${n}) = ${isPowerOfTwoLargest(n)}`);
});

// Performance comparison
console.log("\n=== Performance Analysis ===");
console.log("Approach 1 (Bit Manipulation): O(1) time, O(1) space - BEST");
console.log("Approach 2 (Division): O(log n) time, O(1) space");
console.log("Approach 3 (Math.log2): O(1) time, O(1) space");
console.log("Approach 4 (Modulo): O(1) time, O(1) space");

