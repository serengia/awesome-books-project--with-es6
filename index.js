import Books from "./modules/books.js";
import { DateTime } from "./modules/luxon.js";

// Sections
const allSections = document.querySelectorAll(".section");
const bookListSection = document.getElementById("section-book-list");
const addBookSection = document.getElementById("section-add-new-book");
const contactSection = document.getElementById("section-contact");

// Menu buttons
const listMenuBtn = document.getElementById("listMenu");
const addBookMenuBtn = document.getElementById("addBookMenu");
const contactMenuBtn = document.getElementById("contactMenu");

// Date element
const dateElement = document.querySelector(".date");

// /////////////////////////
// // DYNAMIC PAGE FUNCTIONALITY
// ////////////////////

const reset = () => {
  allSections.forEach((node) => {
    node.style.display = "none";
  });
};

// On window.load
reset();
bookListSection.style.display = "block";

// Clicks handler
listMenuBtn.addEventListener("click", () => {
  reset();
  bookListSection.style.display = "block";
});

addBookMenuBtn.addEventListener("click", () => {
  reset();
  addBookSection.style.display = "block";
});

contactMenuBtn.addEventListener("click", () => {
  reset();
  contactSection.style.display = "block";
});

const createBook = new Books();

createBook.addBook();
createBook.removeBookHandler();
// setInterval(() => {
//   const date = new Date();
//   const formattedDate = date.toLocaleString("en-US", {
//     month: "long",
//     day: "numeric",
//     year: "numeric",
//   });

//   const time = date.toLocaleTimeString();
//   const dateTime = `${formattedDate}, ${time}`;
//   dateElement.innerHTML = dateTime;
// }, 1000);

// Displaying time with luxon package
const dateTime = () => {
  dateElement.innerHTML = DateTime.now();
};

setInterval(dateTime, 1000);
