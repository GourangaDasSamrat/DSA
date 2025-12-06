function removeDuplicates(names) {
  let uniqueNames = [];

  for (let i = 0; i < names.length; i++) {
    if (!uniqueNames.includes(names[i])) {
      uniqueNames.push(names[i]);
    }
  }

  return uniqueNames;
}

// Sample Input
let Student_names = [
  "Zara",
  "Sadia",
  "Mahin",
  "Adnan",
  "Mahin",
  "Maisha",
  "Adnan",
  "Faiyaz",
];

// Sample Output
console.log(removeDuplicates(Student_names));
