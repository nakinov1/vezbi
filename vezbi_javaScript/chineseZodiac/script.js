function chineseZodiac() {
    var year = prompt("Which year you are born?");
    var calcYear = (year - 4) % 12;
    if(calcYear === 0) {
        alert("You are Rat");
    }
    else if(calcYear === 1) {
        alert("You are Fox");
    }
    else if(calcYear === 2) {
        alert("You are Tiger");
    }
    else if(calcYear === 3) {
        alert("You are Rabbit");
    }
    else if(calcYear === 4) {
        alert("You are Dragon");
    }
    else if(calcYear === 5) {
        alert("You are Snake");
    }
    else if(calcYear === 6) {
        alert("You are Horse");
    }
    else if(calcYear === 7) {
        alert("You are Goat");
    }
    else if(calcYear === 8) {
        alert("You are Monkey");
    }
    else if(calcYear === 9) {
        alert("You are Rooster");
    }
    else if(calcYear === 10) {
        alert("You are Dog");
    }
    else if(calcYear === 11) {
        alert("You are Pig");
    }
}

chineseZodiac();