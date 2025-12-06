// Arrays to store book information
let bookTitles = [];
let authorNames = [];
let copiesAvailable = [];

// Function 1: Create Book List
function createBookList(title, author, copies) {
  bookTitles.push(title);
  authorNames.push(author);
  copiesAvailable.push(copies);
}

// Function 2: Add Copies
function addCopies(bookTitle, newCopies) {
  const index = bookTitles.indexOf(bookTitle);

  if (index !== -1) {
    copiesAvailable[index] += newCopies;
  } else {
    console.log("Book not found!");
  }
}

// Function 3: Sell Book
function sellBook(bookTitle, copiesSold) {
  const index = bookTitles.indexOf(bookTitle);

  if (index !== -1) {
    if (copiesAvailable[index] >= copiesSold) {
      copiesAvailable[index] -= copiesSold;
    } else {
      console.log("Not enough copies to sell!");
    }
  } else {
    console.log("Book not found!");
  }
}

// Function 4: Get Details
function getDetails() {
  for (let i = 0; i < bookTitles.length; i++) {
    console.log(
      `"${bookTitles[i]}" by ${authorNames[i]} - Copies Available: ${copiesAvailable[i]}`
    );
  }
}

// test
createBookList("Bohubrihi", "Humayun Ahmed", 10);

addCopies("Bohubrihi", 5);

sellBook("Bohubrihi", 3);

getDetails();
