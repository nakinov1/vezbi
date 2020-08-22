var title = "SEDC" + " " + 2018; // "SEDC " + 2018
//console.log(title);

var score = 50;
if(score >= 51){
	//console.log("you pass the test");
} else {
	//console.log("not pass");
}
var finalScore = score + 50;
//console.log(finalScore);
	
//var money = prompt("How much money you have?");
// if(money === "" || money === null || money <= 0){
	// alert("Please enter money");
// } else if(money <= 100){
	// alert("you can buy a candy bar");
// } else if(money <= 500){
	// alert("you can buy a TOS");
// } else {
	// alert("you are rich");
// }
// var age = prompt("how old are you");
// switch(age){
	// case "5":
		// console.log("go home");
		// break;
	// case "15": 
		// console.log("you have 5min");
		// break;
	// default:
		// console.log("stay");
		// break;
// }

//age === 5 // "5" === 5

// switch(true){//true === true
	// case money === null || money < 0:
		// alert("Please enter money");
		// break;
	// case money <=100:
		// alert("you can buy a candy bar");
		// break;
	// default:
		// alert("you can buy a TOS");
		// break;	
// }
// var year = prompt("koga");
// var calYear = (year - 4)%12;
// switch(calYear){
	// case 0:
		// console.log("Rat");
		// break;
	// case 1: 	
		// console.log("Ox");
		// break;
	// case 2: 
		// console.log("Tiger");
		// break;
	// default:
		// console.log("error");
// }

function sayHello() {
	console.log("Hey you");
};
sayHello();
sayHello();
sayHello();
sayHello();
console.log("------------------------------------------------------");
function sayHelloUser(userName) {
	var hey = `Hey ${userName}`;
	//return `Hey ${userName}`;
	return hey;
};

sayHelloUser("Riste");
var helloRiste = sayHelloUser("Riste T");
alert(helloRiste);
console.log(sayHelloUser("Dejan"));
console.log(sayHelloUser(5));
console.log(helloRiste);
console.log("--------------------");

function sum(num1, num2) {
	var result = num1 + num2;
	return result;
	//return num1 + num2;
}

var cSum = sum(1, 9);
console.log(cSum);
alert(cSum);

console.log(sum(11, 9));





