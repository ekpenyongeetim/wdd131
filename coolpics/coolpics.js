const gallery = document.querySelector(".gallery");
const modal = document.querySelector("dialog");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");
// Select the menu button and navigation
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");

// Event listener for opening the modal
gallery.addEventListener("click", openModal);

function openModal(e) {
  const img = e.target;

  // Make sure the clicked element is an image
  if (img.tagName !== "IMG") {
    return;
  }

  const src = img.getAttribute("src");
  const alt = img.getAttribute("alt");

  modalImage.src = src;
  modalImage.alt = alt;

  modal.showModal();
}

// Close modal on button click
closeButton.addEventListener("click", () => {
  modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

// Toggle the menu when the button is clicked
menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});
