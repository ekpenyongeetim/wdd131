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

// Static values for temperature and wind speed
const temperature = 30; // Fahrenheit
const windSpeed = 10; // mph

// Calculate Wind Chill
function calculateWindChill(temp, speed) {
  return (
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * temp * Math.pow(speed, 0.16)
  );
}

// Update weather data
function updateWeather() {
  document.getElementById("temp").textContent = temperature;
  document.getElementById("wind-speed").textContent = windSpeed;

  if (temperature <= 50 && windSpeed > 3) {
    const windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
    document.getElementById("wind-chill").textContent = windChill;
  } else {
    document.getElementById("wind-chill").textContent = "N/A";
  }
}

updateWeather();
