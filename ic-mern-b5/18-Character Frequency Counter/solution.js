function countCharacter(str) {
  const charCount = {};

  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  return charCount;
}

// Test cases
console.log(countCharacter("Hello"));
// Output: { H: 1, e: 1, l: 2, o: 1 }

console.log(countCharacter("JavaScript"));
// Output: { J: 1, a: 2, v: 1, S: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }

console.log(countCharacter("GourangaDasSamrat"));
// Output: { a: 2, b: 2, c: 2 }

console.log(countCharacter("Programming"));
// Output: { P: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }
