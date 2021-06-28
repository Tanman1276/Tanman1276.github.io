function doFV() {
    var principal = parseInt(document.getElementById("principle").value);
    var annualRate = parseFloat(document.getElementById("annualRate").value);
    var numYears = parseInt(document.getElementById("numYears").value);
    var periodsPerYear = parseInt(document.getElementById("periods").value);

    var value = computeFutureValue(principal, annualRate, numYears, periodsPerYear);

    document.getElementById("value").value = value;
}


function computeFutureValue(principle, annualRate, years, periodsPerYear) {
    var result = principle * Math.pow(1 + (annualRate / periodsPerYear), years * 12);
    return result.toFixed(2);
}