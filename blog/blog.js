const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description:
      "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐",
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description:
      "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
    imgSrc:
      "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐",
  },
  {
    id: 3,
    title: "Belgariad Book One: Pawn of Prophecy",
    date: "Feb 12, 2022",
    description:
      "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf -- a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
    imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    imgAlt: "Book cover for Pawn of Prophecy",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐⭐",
  },
];

// Select the HTML element where the articles will appear.
const articlesContainer = document.querySelector("#book-reviews");

// Generate the HTML for a single article.
function createArticle(article) {
  const articleElement = document.createElement("article");
  articleElement.classList.add("book-review");

  // Create the book details section.
  const details = document.createElement("aside");
  details.classList.add("book-details");
  details.setAttribute("aria-label", "Book details");

  // Create the date.
  const date = document.createElement("p");
  date.classList.add("date");

  const time = document.createElement("time");
  time.textContent = article.date;

  const parsedDate = new Date(article.date);

  if (!Number.isNaN(parsedDate.getTime())) {
    time.dateTime = [
      parsedDate.getFullYear(),
      String(parsedDate.getMonth() + 1).padStart(2, "0"),
      String(parsedDate.getDate()).padStart(2, "0"),
    ].join("-");
  }

  date.appendChild(time);

  // Create the age range.
  const age = document.createElement("p");
  age.textContent = article.ages;

  // Create the genre.
  const genre = document.createElement("p");
  genre.textContent = article.genre;

  // Create the rating.
  const rating = document.createElement("p");
  rating.classList.add("rating");

  const stars = document.createElement("span");
  stars.setAttribute("role", "img");
  stars.setAttribute("aria-label", `${article.stars.length} out of 5 stars`);
  stars.textContent = article.stars;

  rating.appendChild(stars);

  // Create the book content section.
  const content = document.createElement("div");
  content.classList.add("book-content");

  // Create the title.
  const title = document.createElement("h2");
  title.textContent = article.title;

  // Create the book cover.
  const image = document.createElement("img");
  image.src = article.imgSrc;
  image.alt = article.imgAlt;
  image.width = 150;
  image.height = 225;
  image.loading = "lazy";

  // Create the description.
  const description = document.createElement("p");
  description.textContent = article.description;

  // Assemble the article.
  details.append(date, age, genre, rating);
  content.append(title, image, description);
  articleElement.append(details, content);

  return articleElement;
}

// Display every article from the array.
function displayArticles(articleList) {
  articlesContainer.replaceChildren();

  articleList.forEach(function (article) {
    const articleElement = createArticle(article);
    articlesContainer.appendChild(articleElement);
  });
}

// Display the articles when the page loads.
displayArticles(articles);
