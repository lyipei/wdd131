window.addEventListener('load', () => {
    const year = document.getElementById('currentyear');
    year.innerHTML = new Date().getFullYear();
});

window.addEventListener('load', () => {
    const modified = document.getElementById('lastModified');
    modified.innerHTML = document.lastModified;
});
function calculateWindChill(temperature, windSpeed) {
    let windChill;
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = temperature >= 50 ?
            (35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16))) :
            (13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16)));
    } else {
        windChill = "N/A";
    }
    const windChillElement = document.querySelector('.wind-chill');
    if (windChillElement) {
        windChillElement.textContent = windChill;
    }
}
calculateWindChill(22, 10); 