function Calculate() {
    // Here we extract the user selection 
    var shoeType = document.getElementById("weatherSelect").value;

    if (shoeType != "")
    {
        // Display the message in the "output" div
        document.getElementById("output").innerHTML = "You should wear " + shoeType + ".";
    }
    else
    {
        // Display nothing in the "output" div
        document.getElementById("output").innerHTML = "";
    }
}