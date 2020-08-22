// Write a JavaScript program that will read in an integer and write out its digits
 
function number(){
var numbers = "";
var integer = prompt("Enter your number");
var string = integer.toString();
for(i=0;i<string.length;i++){
	numbers = (numbers + " " + string[i] + " ");
	//(a ako sakas nadole da ti gi vadi broj pa nov red-broj, nov red-broj...) numbers = (numbers + "\n" + string[i] + "\n");
}
return numbers;
}

number();


// Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.


function test() {
var result = "";
for(i=1;i<21;i++) {
if(i%2 !== 0) {
	var result = result + (i + " ");    
}
else {
	var result = result + (i + "\n");  
}
}
return result;
}

test();