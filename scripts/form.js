// Product Array
const products = [
  { id: "tv-001", name: "Smart TV - 55 Inch", value: "smart-tv" },
  { id: "ph-002", name: "Smartphone - 128GB", value: "smartphone" },
  { id: "wm-003", name: "Washing Machine - 7kg", value: "washing-machine" },
  { id: "fr-004", name: "Refrigerator - Double Door", value: "refrigerator" },
  { id: "vc-005", name: "Vacuum Cleaner", value: "vacuum-cleaner" },
  { id: "mw-006", name: "Microwave Oven - 900W", value: "microwave-oven" },
  { id: "lt-007", name: "Laptop - 15.6 Inch, 16GB RAM", value: "laptop" },
  { id: "ac-008", name: "Air Conditioner - 1.5 Ton", value: "air-conditioner" },
  { id: "sp-009", name: "Bluetooth Speaker", value: "bluetooth-speaker" },
  {
    id: "cf-010",
    name: "Ceiling Fan - Energy Efficient",
    value: "ceiling-fan",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("product");

  // Insert placeholder
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Select a Product ...";
  placeholder.disabled = true;
  placeholder.selected = true;
  productSelect.appendChild(placeholder);

  // Populate options
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.value;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });

  // Form validation
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    let isValid = true;
    const inputs = form.querySelectorAll("[required]");

    // Clear error styling
    inputs.forEach((input) => input.classList.remove("error"));

    // Validate inputs
    inputs.forEach((input) => {
      if (!input.checkValidity() || input.value === "") {
        input.classList.add("error");
        if (isValid) {
          input.focus();
        }
        isValid = false;
      }
    });

    if (!isValid) {
      event.preventDefault();
    }
  });

  // Increment and display review count using localStorage

  let count = parseInt(localStorage.getItem("reviewCount")) || 0;

  // Override count to start fresh if desired
  count++;
  localStorage.setItem("reviewCount", count);

  // Dynamically update the review count in the HTML
  const reviewCountElement = document.getElementById("reviewCount");
  if (reviewCountElement) {
    reviewCountElement.textContent = count;
  }
});
