// Increment counter using localStorage
if (localStorage.getItem("reviewCount")) {
  let count = parseInt(localStorage.getItem("reviewCount"));
  count++;
  localStorage.setItem("reviewCount", count);
  document.getElementById("reviewCount").textContent = count;
} else {
  localStorage.setItem("reviewCount", 1);
  document.getElementById("reviewCount").textContent = 1;
}

// Product Array
const products = [
  { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
  { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 },
];

// Dynamically populate product options
const productSelect = document.getElementById("product");

products.forEach((product) => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});
