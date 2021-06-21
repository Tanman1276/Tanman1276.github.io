function doInputOutput() {
    var temperature = parseInt(document.getElementById("temp").value);
    var windSpeed = parseFloat(document.getElementById("windSpeed").value);
    var windChillValue = 0;

    if (temperature <= 50 && windSpeed >= 3) {
        windChillValue = windChill(temperature, windSpeed);
        document.getElementById("output").innerHTML = windChillValue;
    }
}


function windChill(tempF, speed) {
    var windChill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
    return windChill;
}