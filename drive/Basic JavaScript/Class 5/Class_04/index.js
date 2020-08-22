var emptyArray; //typeof undefined
emptyArray = []; //array
var mixArray = ["One", 'true', false, 15];
var array = [true,
            "Sedc",
            15,
            false];
var days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

console.log(days);
console.log("---------------------------------");
console.log(days[1]);
console.log("---------------------------------");
console.log(days[days.length - 1]);
console.log("---------------------------------");
console.log(days.length - 1);
console.log("---------------------------------");
console.log(days[days.length]); //6,7, undefined
console.log("---------------------------------");
days[days.length] = "No more days";
console.log(days[days.length - 1]);//8, undefined, No more Days
console.log("---------------------------------");
console.log(days.length - 1);
console.log("---------------------------------");
console.log(days);
days[0] = "Ponedelnik";
console.log(days);
console.log("---------------------------------");

days.push("New Days");
console.log(days);
console.log(`ova e pred push so pokje vrednosti ${days.length}`);

console.log("---------------------------------");
var daysLength =  days.push("test", 1,2,3,100,);
console.log(daysLength);
console.log(days);

var nullDay = days.unshift("null day");
console.log(days);

console.log(nullDay);

var lastEl = days.pop();

console.log(lastEl);

console.log(days.shift());

days.shift





var num = 15;
var string = "string";
var bool = true; //false
var array = ["hey", 5, true];

function funcName(a,b){
	
	//do someting 
	var result = a + b;
	return result;
}

funcName(15,5);

var food = 'apple';
if(food === 'apple'){
	alert(hey);
}






























