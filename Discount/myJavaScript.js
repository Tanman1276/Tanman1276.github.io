function Calculate() {
    var subtotal = parseFloat(document.getElementById("subtotal").value);
    var dayOfWeek = new Date().getDay();

    if ((dayOfWeek == 2 || dayOfWeek == 3) &&
         subtotal > 50) {
        subtotal *= 0.90;
    }

    subtotal *= 1.06;

    document.getElementById("output").innerHTML = "Your total price is $" + subtotal.toFixed(2) + ".";
}