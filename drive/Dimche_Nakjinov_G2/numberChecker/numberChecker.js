function getNumberStats(number) {
    numberString = number.toString();
    result = {};
    result.length = numberString.length;
    if (number%2 === 0){
        result.oddEven = "even";
    } else {
        result.oddEven = "odd";
    }
    if (numberString[0] === "-") {
        result.positiveNegative = "negative";
    }
    else {
        result.positiveNegative = "positive";
    }
    return result;
}

let numBtn = document.getElementById("num");
let submitBtn = document.getElementById("sub");
submitBtn.addEventListener("click", function(){
    getNumberStats(numBtn.value);
})

// bonus:
// alert (`The number ${number} is a ${result.length} digit number, it's ${result.oddEven} and it's a ${result.positiveNegative} number.`);