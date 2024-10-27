// Variables to reference input, button, and list elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Function to handle adding chapters to the list
button.addEventListener("click", () => {
  if (input.value !== "") {
    // Create list item and delete button
    const li = document.createElement("li");
    li.textContent = input.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    // Append delete button to list item, then list item to list
    li.append(deleteButton);
    list.append(li);

    // Clear input field
    input.value = "";

    // Handle delete button
    deleteButton.addEventListener("click", () => {
      list.removeChild(li);
      input.focus();
    });

    // Focus back to input
    input.focus();
  }
});
