window.addEventListener('load', () => {
    const year = document.getElementById('currentyear');
    year.innerHTML = new Date().getFullYear();
});

window.addEventListener('load', () => {
    const modified = document.getElementById('lastModified');
    modified.innerHTML = document.lastModified;
});

// Define static values for temperature and wind speed (use your own values)
const temperatureCelsius = 10; // in Celsius
const windSpeedKmh = 29; // in km/h

// Function to calculate windchill factor
function calculateWindChill(temperature, windSpeed) {
    // Check if conditions are met for viable wind chill calculations
    if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
        // Formula for calculating windchill factor (in Celsius)
        const windChillCelsius = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        // Convert windchill factor to Fahrenheit if needed
        const windChillFahrenheit = (windChillCelsius * 9 / 5) + 32;
        // Return windchill factor based on the location's preference of units
        return `${windChillCelsius.toFixed(1)}°C`;
    } else {
        // Return "N/A" if conditions are not met for viable wind chill calculations
        return "N/A";
    }
}

// Display windchill factor in the "Weather" section of the page when the page loads
window.onload = function() {
    const windChillElement = document.querySelector(".wind-chill"); // Assuming there's a class named "wind-chill" in your HTML
    const windChill = calculateWindChill(temperatureCelsius, windSpeedKmh);
    windChillElement.textContent = windChill; // Update HTML content with the calculated windchill factor
};
