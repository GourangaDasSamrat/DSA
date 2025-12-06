function printAsteriskTriangle(n) {
  // Iterate through each row
  for (let row = 1; row <= n; row++) {
    // Print 'row' number of asterisks
    let line = "*".repeat(row);
    console.log(line);
  }
}

// Test with example input
console.log("Triangle with 5 rows:");
printAsteriskTriangle(5);

console.log("\nTriangle with 3 rows:");
printAsteriskTriangle(3);

console.log("\nTriangle with 8 rows:");
printAsteriskTriangle(8);
