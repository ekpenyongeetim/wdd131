const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "April 6, 1893",
    squareFeet: 382207,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-763229.jpg",
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "March 10, 2019",
    squareFeet: 40000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/4-Rome-Temple-2160935.jpg",
  },
  {
    name: "Manila Philippines Temple",
    location: "Manila, Philippines",
    dedicated: "September 25, 1984",
    squareFeet: 18845,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-129585-wallpaper.jpg",
  },
  {
    name: "Hong Kong China Temple",
    location: "Hong Kong, China",
    dedicated: "May 26, 1996",
    squareFeet: 28000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x250/hong_kong_china_temple_sealing_room.jpeg",
  },
  {
    name: "Provo City Center Temple",
    location: "Provo, Utah, USA",
    dedicated: "March 20, 2016",
    squareFeet: 85000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple08.jpg",
  },
];

// Dynamically display temples
function displayTemples(temples) {
  const container = document.getElementById("temple-container");
  container.innerHTML = "";

  temples.forEach((temple) => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    const altName = temple.templeName || temple.name; // Handle different name fields

    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="Image of ${altName}" loading="lazy">
      <h3>${altName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Total Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;
    container.appendChild(card);
  });
}

// Filter functions
function filterOld() {
  const oldTemples = temples.filter(
    (temple) => new Date(temple.dedicated).getFullYear() < 1900
  );
  displayTemples(oldTemples);
}

function filterNew() {
  const newTemples = temples.filter(
    (temple) => new Date(temple.dedicated).getFullYear() > 2000
  );
  displayTemples(newTemples);
}

function filterLarge() {
  const largeTemples = temples.filter((temple) => temple.area > 90000);
  displayTemples(largeTemples);
}

function filterSmall() {
  const smallTemples = temples.filter((temple) => temple.area < 10000);
  displayTemples(smallTemples);
}

function showAll() {
  displayTemples(temples);
}

// Event listeners
document.getElementById("filter-home").addEventListener("click", showAll);
document.getElementById("filter-old").addEventListener("click", filterOld);
document.getElementById("filter-new").addEventListener("click", filterNew);
document.getElementById("filter-large").addEventListener("click", filterLarge);
document.getElementById("filter-small").addEventListener("click", filterSmall);

// Hamburger menu toggle
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");

  const expanded = hamButton.getAttribute("aria-expanded") === "true" || false;
  hamButton.setAttribute("aria-expanded", !expanded);
});

// Footer updates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Initial load
showAll();
