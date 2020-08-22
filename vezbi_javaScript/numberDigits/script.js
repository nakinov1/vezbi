function numberDigits() {
    var number = prompt("Enter your number");
    var digits = "";
    for(i=0; i<number.length; i++) {
        digits = digits + " " + number[i] + " ";
    }
    return digits;
}

numberDigits();