function DisplayAlarmMessage() {
    // Variables to hold our time information
    var now = new Date();
    var month = now.getMonth();
    var dayOfMonth = now.getDate();
    var dayOfWeek = now.getDay();

    document.getElementById("time").innerHTML = now;

    // Here we throw in all the conditions where we are allowed to sleep in.
    if ((dayOfWeek == 6 || dayOfWeek == 0) ||
        (month == 0 && dayOfMonth == 1) ||
        (month == 6 && dayOfMonth == 4) ||
        (month == 11 && dayOfMonth == 25)) {
            document.getElementById("output").innerHTML = "Sleep in.";
        }
    else {
        // If it's not a weekend or holiday, get out of bed
        document.getElementById("output").innerHTML = "Get up!";
    }
}