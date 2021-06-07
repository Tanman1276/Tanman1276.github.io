function SumOdds() {
    // Variables to hold the user's input and total sum of odd numners
    var input = parseInt(document.getElementById("input").value);
    var sum = 0;

    // Loop until we pass the "input" value and add "i" to sum.
    // Increment "i" by 2 so we get to the next odd number.
    // This could also be written as a "while" loop and give the same results
    for (var i = 1; i <= input; i += 2) {
        sum += i;
    }

    // Once we have the total sum, display it on the page
    document.getElementById("output").innerHTML = sum;
}