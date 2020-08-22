getNumberStats = (event, number) => {
    event.preventDefault();
    result = {};
    numberString = number.toString();
    result.length = numberString.length;
    if (numberString[0] === "-") {
        result.length = numberString.length - 1;
    }
    if (number % 2 === 0) {
        result.oddEven = "even";
    }
    else {
        result.oddEven = "odd";
    }
    if (numberString[0] === "-") {
        result.positiveNegative = "negative";
    }
    else {
        result.positiveNegative = "positive";
    }
    // return result;
    return `Number ${number} has ${result.length} digits, is ${result.oddEven} and is ${result.positiveNegative} number.`;
}

let numBtn = document.getElementById("num");
let submitBtn = document.getElementById("sub");
let resultEl = document.getElementById("resultEl");
submitBtn.addEventListener("click", function (event) {
    resultEl.innerHTML = getNumberStats(event, numBtn.value);
})

