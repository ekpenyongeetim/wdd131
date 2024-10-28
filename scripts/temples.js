// Hamburger menu toggle
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");

  // Toggle aria-expanded for accessibility
  const expanded = hamButton.getAttribute("aria-expanded") === "true" || false;
  hamButton.setAttribute("aria-expanded", !expanded);
});

// Footer date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
