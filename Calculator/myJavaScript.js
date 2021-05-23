function Calculate() {
    // Here we extract the int values from the input fields by using parseInt()
    var numOne = parseInt(document.getElementById("number1").value);
    var numTwo = parseInt(document.getElementById("number2").value);
    var sign = document.getElementById("sign").value;
    var userAnswer = parseInt(document.getElementById("userAnswer").value);
    var output;
    var message;

    // Using the switch statement, we figure out which mathematical 
    // calculation to do based on what the user input was
    switch (sign)
    {
        case "+":
            output = numOne + numTwo;
            break;

        case "-":
            output = numOne - numTwo;
            break;

        case "*":
            output = numOne * numTwo;
            break;

        case "/":
            output = numOne / numTwo;
            break;

        default:
            output = "Invalid";
    }

    if (parseInt(output) == userAnswer)
    {
        message = "Correct! 🏆";
    }
    else
    {
        message = "Incorrect 😢";
    }

    // Display the message in the "output" div
    document.getElementById("output").innerHTML = message;
}