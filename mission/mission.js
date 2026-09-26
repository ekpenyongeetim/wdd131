let selectElem = document.querySelector("select");

let card = document.querySelector(".document-card");
let heading = document.querySelector("h1");
let subtitle = document.querySelector(".subtitle");
let paragraphs = document.querySelectorAll("p");
let listItems = document.querySelectorAll("ol li");
let logoBYU = document.querySelector(".logo-byu");
let logoIdaho = document.querySelector(".logo-idaho");
let line = document.querySelector("hr");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
  let current = selectElem.value;

  if (current == "dark") {
    // Page
    document.body.style.backgroundColor = "#121820";
    document.body.style.color = "#e8edf2";

    // Card
    card.style.backgroundColor = "#1c2733";
    card.style.borderColor = "#354454";

    // Heading
    heading.style.color = "#e8edf2";

    // Subtitle
    subtitle.style.color = "#7ec8e3";

    // Paragraphs
    paragraphs.forEach(function (paragraph) {
      paragraph.style.color = "#d6dee6";
    });

    // List
    listItems.forEach(function (item) {
      item.style.color = "#d6dee6";
    });

    // Logo
    logoBYU.style.color = "#7ec8e3";
    logoIdaho.style.color = "#a7c8dc";

    // Line
    line.style.backgroundColor = "#7ec8e3";
  } else {
    // Page
    document.body.style.backgroundColor = "#f4f1ea";
    document.body.style.color = "#222222";

    // Card
    card.style.backgroundColor = "#ffffff";
    card.style.borderColor = "#e0e0e0";

    // Heading
    heading.style.color = "#111111";

    // Subtitle
    subtitle.style.color = "#4a75a0";

    // Paragraphs
    paragraphs.forEach(function (paragraph) {
      paragraph.style.color = "#222222";
    });

    // List
    listItems.forEach(function (item) {
      item.style.color = "#222222";
    });

    // Logo
    logoBYU.style.color = "#3b6594";
    logoIdaho.style.color = "#5c7fa3";

    // Line
    line.style.backgroundColor = "#3b6594";
  }
}
