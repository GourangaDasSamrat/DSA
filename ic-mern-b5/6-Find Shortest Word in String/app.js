function findShortestWord(str) {
  let words = str.replace(/[^\w\s]/g, "").split(" ");

  let shortest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortest.length) {
      shortest = words[i];
    }
  }

  return shortest;
}

// Test cases
console.log(findShortestWord("The quick brown fox jumps over the lazy dog")); // "The"
console.log(findShortestWord("Hello world")); // "world"
console.log(findShortestWord("Today is Monday")); // "is"
