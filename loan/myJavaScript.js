function doPayment() {
    var principal = parseInt(document.getElementById("principle").value);
    var annualRate = parseFloat(document.getElementById("annualRate").value);
    var numYears = parseInt(document.getElementById("numYears").value);
    var periodsPerYear = parseInt(document.getElementById("periods").value);

    var value = computePayment(principal, annualRate, numYears, periodsPerYear);

    document.getElementById("paymentValue").value = value;
}


function doBalance() {
    var principal = parseInt(document.getElementById("principle").value);
    var annualRate = parseFloat(document.getElementById("annualRate").value);
    var numYears = parseInt(document.getElementById("numYears").value);
    var periodsPerYear = parseInt(document.getElementById("periods").value);
    var numPaymentPaidToDate = parseFloat(document.getElementById("numPaymentPaidToDate").value);

    var value = computeBalance(principal, annualRate, numYears, periodsPerYear, numPaymentPaidToDate);

    document.getElementById("balanceValue").value = value;
}


function computePayment(principle, annualRate, years, periodsPerYear) {
    var a = principle;
    var r = annualRate / periodsPerYear;
    var n = periodsPerYear * years;
    var result = (a * r) / (1 - Math.pow(1 + r, -n));

    return result.toFixed(2);
}


function computeBalance(principle, annualRate, years, periodsPerYear, numPaymentPaidToDate) {
    var a = principle;
    var r = annualRate / periodsPerYear;
    var d = numPaymentPaidToDate;
    var p = computePayment(principle, annualRate, years, periodsPerYear);
    var result = a * Math.pow(1 + r, d) - ((p * (Math.pow(1 + r, d) - 1)) / r);

    return result.toFixed(2);
}