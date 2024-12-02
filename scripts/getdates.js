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

// Weather: Wind chill calculation
const temperature = 12; // Static value in Celsius
const windSpeed = 10; // Static value in km/h

function calculateWindChill(temp, speed) {
  if (temp <= 10 && speed > 4.8) {
    return (
      (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
      ).toFixed(1) + "°C"
    );
  }
  return "N/A";
}

document.getElementById("wind-chill").textContent = calculateWindChill(
  temperature,
  windSpeed
);
