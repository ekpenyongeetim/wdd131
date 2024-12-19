// JavaScript to display the current year and last modified date in the footer

// Set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set the last modified date
document.getElementById("lastModified").textContent =
  "Last Modification: " + document.lastModified;

// weather JS
// Update footer with current year and last modified date
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// scripts.js
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("dynamic-button");
  const message = document.getElementById("dynamic-message");

  button.addEventListener("click", () => {
    message.textContent = "Hello! This is a dynamically generated message.";
  });
});
