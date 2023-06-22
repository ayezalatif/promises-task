//You have an array of objects representing books. Each book has properties like title, author, and publicationYear.
// Write a function like getNewestBook that takes in an array of books as param and returns a promise. 
//The promise should resolve with the newest book object based on the highest publication year.
// Use async/await and a callback function to implement this.
const books = [
  { title: 'Book 1', author: 'Author 1', publicationYear: 2005 },
  { title: 'Book 2', author: 'Author 2', publicationYear: 2010 },
  { title: 'Book 3', author: 'Author 3', publicationYear: 2018 },
  { title: 'Book 4', author: 'Author 4', publicationYear: 2022 },
];
function getBooks(array) {
  return new Promise((resolve, reject) => {
    let latest = 0;
    setTimeout(() => {
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element);
          
      }  
    }, 2000);
  })
} console.log(getBooks(books));
// } getBooks().then((result) => {
//   console.log(result);
// })