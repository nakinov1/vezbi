// Exercise from the class
// Exercise 1
// With if/else

var score = 50;
if(score >= 51) {
	console.log("You pass the test");
} else {
	console.log("Not pass");
}

// With switch

var score = 50;
switch(true) {
	case score >= 51:
		console.log("You pass the test");
		break;
	case score < 51:
		console.log("Not pass");
		break;
}

// Exercise 2
// With if/else if

var money = prompt("How much money you have?");
if(money === "" || money === null || money <= 0) {
	alert("Please enter money");
} else if(money <= 100) {
	alert("you can buy a candy bar");
} else if(money <= 500) {
	alert("you can buy a TOS");
} else {
	alert("you are rich");
}

// With switch

var money = prompt("How much money you have?");
switch(true) {
	case money === "" || money === null || money <= 0:
		alert("Please enter money");
		break;
	case money <= 100:
		alert("You can buy a candy bar");
		break;
	case money <= 500:
		alert("You can buy a TOS");
		break;
	default:
		alert("You are rich");
		break;		
}

// Chinese zodiac
// With switch

var year = prompt("Which year you are borned?");
var calYear = (year - 4)%12;
switch(calYear) {
	case 0:
		alert("Your sign is Rat");
		break;
	case 1:
		alert("Your sign is Ox");
		break;
	case 2:
		alert("Your sign is Tiger");
		break;
	case 3:
		alert("Your sign is Rabbit");
		break;
	case 4:
		alert("Your sign is Dragon");
		break;
	case 5:
		alert("Your sign is Snake");
		break;
	case 6:
		alert("Your sign is Horse");
		break;
	case 7:
		alert("Your sign is Goat");
		break;
	case 8:
		alert("Your sign is Monkey");
		break;
	case 9:
		alert("Your sign is Rooster");
		break;
	case 10:
		alert("Your sign is Dog");
		break;
	case 11:
		alert("Your sign is Pig");
		break;
}

// With else/else if

var year = prompt("Which year you are borned?");
var calYear = (year - 4)%12;
if(calYear === 0) {
	alert("Your sign is Rat");
} else if(calYear === 1) {
	alert("Your sign is Ox");
} else if(calYear === 2) {
	alert("Your sign is Tiger");
} else if(calYear === 3) {
	alert("Your sign is Rabbit");
} else if(calYear === 4) {
	alert("Your sign is Dragon");
} else if(calYear === 5) {
	alert("Your sign is Snake");
} else if(calYear === 6) {
	alert("Your sign is Horse");
} else if(calYear === 7) {
	alert("Your sign is Goat");
} else if(calYear === 8) {
	alert("Your sign is Monkey");
} else if(calYear === 9) {
	alert("Your sign is Rooster");
} else if(calYear === 10) {
	alert("Your sign is Dog");
} else if(calYear === 11) {
	alert("Your sign is Pig");
}



// Homework from the homework.docx file

// Exercise 1

function multipleNum(a, b) {
	console.log(a*b);
}

multipleNum(12, 1234);
multipleNum(65, 234);
multipleNum(25, 5);


// Exercise 2

function divideNum(a, b) {
	console.log(`The result is ${a/b}`);
}

divideNum(6888, 123);
divideNum(3510, 234);
divideNum(25, 5);


// Exercise 3

function fahrToCels(a) {
var cels = (a - 32) * (5/9);
	console.log(`${a} fahrenheit are ${cels} celsius`);
}

function celsToFahr(a) {
var fahr = a * 9/5 + 32;
	console.log(`${a} celsius are ${fahr} fahrenheit`);
}

fahrToCels(140);
fahrToCels(98);
celsToFahr(37);
celsToFahr(100);


// Exercise 4

function myType(a) {
	console.log(typeof(a));
}

var b;

myType(null);
myType(true);
myType(29);
myType("Okay");
myType(b);
