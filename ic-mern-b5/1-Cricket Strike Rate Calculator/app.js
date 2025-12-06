function calculateStrikeRate(runs, balls) {
  // Handle edge case where balls is 0 to avoid division by zero
  if (balls === 0) {
    return 0.0;
  }

  // Calculate strike rate: (runs / balls) * 100
  const strikeRate = (runs / balls) * 100;

  // Round to 2 decimal places
  return parseFloat(strikeRate.toFixed(2));
}

// Test cases
console.log(calculateStrikeRate(45, 30)); // Expected: 150.00
console.log(calculateStrikeRate(100, 60)); // Expected: 166.67
console.log(calculateStrikeRate(0, 10)); // Expected: 0.00
console.log(calculateStrikeRate(75, 50)); // Expected: 150.00
