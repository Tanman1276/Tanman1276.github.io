function fiveTimes() {
    // This is what will end up being diplayed to the user
    var output = "";

    // Loop through to solve and display the simple times table for the number 5
    for (var i = 1; i <= 12; i++) {
        output += "5 x " + i + " = " + (5 * i) + "<br>";
    }

    // Update the output div to display the output string
    document.getElementById("output").innerHTML = output;
}