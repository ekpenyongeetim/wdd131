const form = document.querySelector("#eventForm");
const type = document.querySelector("#type");
const additionalInfo = document.querySelector("#additionalInfo");
const additionalLabel = document.querySelector("#additionalLabel");
const additionalInput = document.querySelector("#additionalInput");
const date = document.querySelector("#date");
const errors = document.querySelector("#errors");
const ticket = document.querySelector("#ticket");

// Set the earliest available date to tomorrow

function setMinimumDate() {
  const today = new Date();

  today.setDate(today.getDate() + 1);

  const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000,
  )
    .toISOString()
    .split("T")[0];

  date.min = localDate;
}

setMinimumDate();

// Show the appropriate input field based on registration type

function updateAdditionalField() {
  const value = type.value;

  if (value === "student") {
    additionalInfo.hidden = false;

    additionalLabel.textContent = "Student I#";

    additionalInput.placeholder = "Enter your 9 digit I-number";

    additionalInput.required = true;

    additionalInput.pattern = "[0-9]{9}";

    additionalInput.maxLength = 9;

    additionalInput.inputMode = "numeric";
  } else if (value === "guest") {
    additionalInfo.hidden = false;

    additionalLabel.textContent = "Access Code";

    additionalInput.placeholder = "Enter event access code";

    additionalInput.required = true;

    additionalInput.pattern = "EVENT131";

    additionalInput.maxLength = 8;

    additionalInput.inputMode = "text";
  } else {
    additionalInfo.hidden = true;

    additionalInput.required = false;

    additionalInput.value = "";

    additionalInput.removeAttribute("pattern");

    additionalInput.removeAttribute("maxlength");
  }
}

// Listen for changes to registration type

type.addEventListener("change", updateAdditionalField);

updateAdditionalField();

// Check whether the selected date is in the past or today

function isInvalidDate(value) {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const chosen = new Date(value + "T00:00:00");

  return !value || chosen <= today;
}

// Validate the student I-number

function isValidStudentNumber(value) {
  return /^\d{9}$/.test(value);
}

// Validate the guest access code

function isValidAccessCode(value) {
  return value === "EVENT131";
}

// Display error messages

function displayErrors(errorMessages) {
  const heading = document.createElement("h3");

  heading.textContent = "Please correct the following errors:";

  const list = document.createElement("ul");

  errorMessages.forEach((message) => {
    const item = document.createElement("li");

    item.textContent = message;

    list.appendChild(item);
  });

  errors.replaceChildren(heading, list);
}

// Handle form submission

form.addEventListener("submit", function (event) {
  event.preventDefault();

  errors.textContent = "";
  ticket.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const availableDate = date.value;
  const registrationType = type.value;
  const additionalValue = additionalInput.value.trim();

  const errorMessages = [];

  // Validate required fields

  if (!firstName) {
    errorMessages.push("Please enter your first name.");
  }

  if (!lastName) {
    errorMessages.push("Please enter your last name.");
  }

  if (!email || !form.email.validity.valid) {
    errorMessages.push("Please enter a valid email address.");
  }

  // Validate the event date

  if (isInvalidDate(availableDate)) {
    errorMessages.push("Please choose a date later than today.");
  }

  // Validate registration type

  if (!registrationType) {
    errorMessages.push("Please select Student or Guest.");
  }

  // Validate student or guest information

  if (registrationType === "student") {
    if (!isValidStudentNumber(additionalValue)) {
      errorMessages.push("Student I# must contain exactly 9 digits.");
    }
  } else if (registrationType === "guest") {
    if (!isValidAccessCode(additionalValue)) {
      errorMessages.push("Invalid access code. Please enter EVENT131.");
    }
  }

  // Display errors if validation fails

  if (errorMessages.length > 0) {
    displayErrors(errorMessages);
    return;
  }

  // Generate ticket information after successful validation

  const ticketNumber = "EVT-" + Date.now();

  const ticketCard = document.createElement("div");

  ticketCard.className = "ticket-card";

  const heading = document.createElement("h2");

  heading.textContent = "Registration Successful!";

  const message = document.createElement("p");

  message.textContent = `Congratulations ${firstName} ${lastName}! Your event registration is confirmed.`;

  const details = document.createElement("div");

  details.className = "ticket-details";

  const ticketInformation = [
    ["Name", `${firstName} ${lastName}`],
    ["Email", email],
    ["Event Date", availableDate],
    ["Registration Type", registrationType],
    [
      registrationType === "student" ? "Student I#" : "Access Code",
      additionalValue,
    ],
  ];

  ticketInformation.forEach(([label, value]) => {
    const item = document.createElement("p");

    const strong = document.createElement("strong");

    strong.textContent = label + ": ";

    const text = document.createTextNode(value);

    item.append(strong, text);

    details.appendChild(item);
  });

  const number = document.createElement("div");

  number.className = "ticket-number";

  number.textContent = `Ticket Number: ${ticketNumber}`;

  ticketCard.append(heading, message, details, number);

  ticket.appendChild(ticketCard);

  // Reset the form

  form.reset();

  updateAdditionalField();

  setMinimumDate();
});
