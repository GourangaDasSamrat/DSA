function CountPairs(str) {
  let count = 0;

  for (let i = 0; i < str.length - 1; i++) {
    let char1 = str[i];
    let char2 = str[i + 1];

    if (/[a-z]/.test(char1) && /[0-9]/.test(char2)) {
      let num = Number(char2);

      if (num % 2 === 0) {
        count++;
      }
    }
  }

  return count;
}

// Test
console.log(CountPairs("a1b2c3d4e5f6"));
