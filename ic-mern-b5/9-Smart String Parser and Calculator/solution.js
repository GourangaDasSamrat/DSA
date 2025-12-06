function parseString(a, b, c) {
  let inputs = [a, b, c].filter((item) => item !== undefined);

  let allNumbers = inputs.every((item) => !isNaN(item));

  if (allNumbers) {
    let sum = inputs.reduce((total, value) => total + Number(value), 0);
    return sum;
  } else {
    return inputs.join(" ");
  }
}

// Test
console.log(parseString("21", "24", "40"));
console.log(parseString("Hello", "Alpha"));
console.log(parseString("Summer", "2022"));
