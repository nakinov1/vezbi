function moneyStatus() {
    var money = prompt("How much money you have?");
    if(money === null || money === "" || money <= 0){
        alert("Incorect input");
    }
    else if(money <= 100) {
        alert("You can bye a beer");
    }
    else if(money <=500 && money > 100) {
        alert("You can bye a joint");
    }
    else {
        alert("You are rich");
    }
}

moneyStatus();