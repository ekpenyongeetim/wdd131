// Variables to reference input, button, and list elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Load chaptersArray from localStorage or initialize empty array
let chaptersArray = getChapterList() || [];

// Display chapters on page load
chaptersArray.forEach((chapter) => displayChapter(chapter));

// Event listener for adding a new chapter
button.addEventListener("click", () => {
  if (input.value !== "") {
    const chapter = input.value; // Get input value
    displayChapter(chapter); // Display the chapter
    chaptersArray.push(chapter); // Add to array
    updateChapterList(); // Update localStorage
    input.value = ""; // Clear input field
    input.focus(); // Focus back on input
  }
});

// Function to display a single chapter
function displayChapter(chapter) {
  const li = document.createElement("li"); // Create list item
  li.textContent = chapter;

  const deleteButton = document.createElement("button"); // Create delete button
  deleteButton.textContent = "❌";
  deleteButton.classList.add("delete");

  li.append(deleteButton); // Append button to list item
  list.append(li); // Append list item to list

  // Event listener for delete button
  deleteButton.addEventListener("click", () => {
    list.removeChild(li); // Remove item from DOM
    deleteChapter(chapter); // Remove from array and localStorage
  });
}

// Function to update localStorage with the latest chaptersArray
function updateChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

// Function to retrieve chapters from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

// Function to delete a chapter from the list and localStorage
function deleteChapter(chapter) {
  chaptersArray = chaptersArray.filter((item) => item !== chapter); // Filter out chapter
  updateChapterList(); // Update localStorage
}
