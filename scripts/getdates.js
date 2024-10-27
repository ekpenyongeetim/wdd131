// JavaScript to display the current year and last modified date in the footer

// Set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set the last modified date
document.getElementById("lastModified").textContent =
  "Last Modification: " + document.lastModified;
