// ___________________________________________________________________________________________________________
// Student exercise - #1
// ___________________________________________________________________________________________________________

function calculateSupply(age, amount){
	result = 0;
	maxAge = 100;
	res = (maxAge - age) * 365 * amount;
	switch(true){
		case age <= 0:
			alert("You've entered invalid age");
			break;
		case amount <=0:
			alert("You've entered invalide amount");
			break;
		case res % 1 > 0.5:
			result = (res - (res % 1)) + 1;
			break;
		default:
			result = res - (res % 1);
			break;
}
	result = `You will need ${result} to last you until the ripe old age of ${maxAge}`;
	return result;
}

calculateSupply(36, 10);

// _____________________________________________________________________________________________________________
// Student exercise - #2
// _____________________________________________________________________________________________________________

function calculateAge(birthY, currentY){
	currentY = (new Date()).getFullYear();
	// birthY = prompt("Please enter your birth year");
	// alert(`You are ${currentY - birthY} years old`);
	result = `You are ${currentY - birthY} years old`;
	return result;
}


console.log(calculateAge(1982));
console.log(calculateAge(1945));
console.log(calculateAge(1903));

// ___________________________________________________________________________________________________________
// Student exercise - #3
// ____________________________________________________________________________________________________________

function letterInString(string, letter){
//	string = string.toString();
	result = 0;
	i = 0;
	while(i < string.length){
	if(letter === string[i]){
		result += 1;
}
	i++;
}
return result;
}

letterInString("This is student exercise number 3", "e");

// ____________________________________________________________________________________________________________
// Student exercise - #4
// ___________________________________________________________________________________________________________


function textTruncate(inputString, counter){
		result = "";
		for(i = 0; i < counter ;i++){
			result += inputString[i];
}
	result += "...";
	return result;
}


textTruncate("We are doing JS string exercises.",15);

// ____________________________________________________________________________________________________________
// Student exercise - #5
// ____________________________________________________________________________________________________________

function removeFromA(inputA){
resultA = [];	
for(i=0; i < inputA.length; i++){
	switch(true){
		case inputA[i] !== null && inputA[i] !== 0 && inputA[i] !== "" && inputA[i] !== false && inputA[i] !== undefined && isNaN(inputA[i]) === false:
			resultA.push(inputA[i]);
			break;
}
}
return resultA;
}


removeFromA([NaN, 0, 15, false, -22, "", undefined, 47, null, 100]);

// _____________________________________________________________________________________________________________
// Student exercise - #6
// _____________________________________________________________________________________________________________


function cowsAndChickens(cows, chicks){
strCows = cows.toString();
strChicks = chicks.toString();
if(strCows.length === 1){
	strCows = `00${strCows} Cows`
}
	else if(strCows.length === 2){
		strCows = `0${strCows} Cows`
}
	else if(strCows.length === 3){
		strCows = `${strCows} Cows`
}
if(strChicks.length === 1){
	strChicks = `00${strChicks} Chickens`
}
	else if(strChicks.length === 2){
		strChicks = `0${strChicks} Chickens`
}
	else if(strChicks.length === 3){
		strChicks = `${strChicks} Chickens`
}
result = `${strCows} \n ${strChicks}`;
return result;
}


cowsAndChickens(21, 111);

// ___________________________________________________________________________________________________________
// Bonus Homework
// _______________________________________________________________________________________________________
// Number 1:
// ___________________________________________________________________________________________________________
// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 
// ___________________________________________________________________________________________________________



function secondLowHigh(){
numbers = [2,14,4,754,322,6754,2342,213,1,4,233,21,4234,2222];
minNum = Math.min(...numbers);
var indexMin = numbers.indexOf(minNum);
numbers.splice(indexMin, 1);
maxNum = Math.max(...numbers);
var indexMax = numbers.indexOf(maxNum);
numbers.splice(indexMax, 1);
secMinNum = Math.min(...numbers);
secMaxNum = Math.max(...numbers);
result = `${secMinNum}, ${secMaxNum}`;
return result;
}

secondLowHigh();


// ____________________________________________________________________________________________
// Number 2:
// ____________________________________________________________________________________________
// Write a JavaScript function to convert an amount to bills and coins.
// Available bills and coins: 1000, 500, 200, 100, 50, 10, 5, 3, 2, 1. 
// Expected Output for 585:
// 1 bill of 500,
// 1 bill of 50,
// 3 bills of 10,
// 1 coin of 5.
// ________________________________________________________________________________________________

function convert(money){
wholeK = (money - (money % 1000)) / 1000;
strWholeK = `${wholeK} bill of 1000 \n`;
money = money - (wholeK * 1000);
halfK = (money - (money % 500)) / 500;
strHalfK = `${halfK} bill of 500 \n`;
money = money - (halfK * 500);
twoHun = (money - (money % 200)) / 200;
strTwoHun = `${twoHun} bill of 200 \n`;
money = money - (twoHun * 200);
oneHun = (money - (money % 100)) / 100;
strOneHun = `${oneHun} bill of 100 \n`;
money = money - (oneHun * 100);
fifty = (money - (money % 50)) / 50;
strFifty = `${fifty} bill of 50 \n`;
money = money - (fifty * 50);
ten = (money - (money % 10)) / 10;
strTen = `${ten} bill of 10 \n`;
money = money - (ten * 10);
five = (money - (money % 5)) / 5;
strFive = `${five} coin of 5 \n`;
money = money - (five * 5);
three = (money - (money % 3)) / 3;
strThree = `${three} coin of 3 \n`;
money = money - (three *3);
two = (money - (money % 2)) / 2;
strTwo = `${two} coin of 2 \n`;
money = money - (two *2);
one = (money - (money % 1)) /1;
strOne = `${one} coin of 1 \n`;
array = [wholeK, halfK, twoHun, oneHun, fifty, ten, five, three, two, one];
array1 = [strWholeK, strHalfK, strTwoHun, strOneHun, strFifty, strTen, strFive, strThree, strTwo, strOne];
for(i=0;i<10;i++){
	if(array[i] !== 0){
		console.log(array1[i]);
}
}
}


convert(585);


// ____________________________________________________________________________________________________
// Number 3:
// ____________________________________________________________________________________________________
// Write a JavaScript function that takes one parameter and checks if the parameter is palindrome.
// Palindrome is a word, phrase, or sequence that reads the same backwards as forwards.
// e.g. “madam” or “nurses run”. (For this strings the output should be true)
// Also try this for numbers.
// e.g. 1991 or 36363. (For this numbers the output should be true)
// _____________________________________________________________________________________________________

function palindrome(input){
input = input.toString();
revInput = "";
for(i=input.length-1; i>=0; i--){
	revInput = revInput + input[i];
}
result = input === revInput;
return result;
}

palindrome(1234567654321);
