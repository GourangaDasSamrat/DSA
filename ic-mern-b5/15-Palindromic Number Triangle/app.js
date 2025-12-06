function printPalindromicTriangle(n) {
  // Iterate through each row
  for (let row = 1; row <= n; row++) {
    let line = "";

    // Starting digit for this row
    let startDigit = row;

    // Build ascending part (including middle)
    for (let i = 0; i < row; i++) {
      line += (startDigit + i) % 10; // Use modulo 10 to wrap digits 0-9
    }

    // Build descending part (mirror without middle digit)
    for (let i = row - 2; i >= 0; i--) {
      line += (startDigit + i) % 10;
    }

    console.log(line);
  }
}

// Test with example input
console.log("Triangle with 5 rows:");
printPalindromicTriangle(5);

console.log("\nTriangle with 3 rows:");
printPalindromicTriangle(3);

console.log("\nTriangle with 7 rows:");
printPalindromicTriangle(7);
