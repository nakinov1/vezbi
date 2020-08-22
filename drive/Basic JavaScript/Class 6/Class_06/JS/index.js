// 1 2
// 3 4
// 5 6
// var res ="";
// debugger;
// for(var i=1; i<=20; i++){
//     if(i%2 ===0){
//         res += `${i}\n`;
//     } else {
//         res += `${i} `;
//     }
// }
// alert(res);


//var input = prompt("Enter a number");
// 1234
// 1,2,3,4

//var num = Number(input);
// var numArray=[]; 
// while(num>0){
//     var lastNum = num % 10; 
//     numArray.unshift(lastNum);
//     var newNum = num - lastNum;
//     num = newNum/10; //num-- num++
// }
//console.log(numArray);
// var count=0;
// while (count<=10) {
//     console.log(c);
//     count++;
// }


// console.log(mySum());//6
// console.log(mySum(6)); //11
// console.log(mySum(1,2,3));//6
// console.log(mySum(7,5));//12,15

var a = 6;
var c =12;

//console.log(mySum(c));//17,15
function mySum(a=1,b=2,c=3){
    var res = a+b+c;
    return res;
};
function printMyName(name, surname){
    debugger;
    var fullName = `${name} ${surname()}`;
    console.log(fullName);
}

var name = "Riste";
var surname = "Tegovski";
//printMyName(surname, mySum());
//printMyName(name, mySum);

var myFun = function(){
    console.log("Hey");
}

//myFun();

//printMyName("Jas", myFun);

function restParam(param1, param2 = 5, ...param){
    //debugger;
}
restParam("black","car","bmw",530);

restParam("new", "car");


//var mes = "I am Global";
function print(message){
    debugger;
    //var mes = message;
    var string = "I am from func one";
    console.log(mes); //Local
    
    function newPrint(){
        console.log(mes); // Global,local
        var string = "I am Local Two";
        console.log(string);
        function foo(){

        }
    }
    newPrint();
    console.log(string);
}

//print("I am local");
//console.log(mes);

var message = 'Outside the function';						
function warning   (message) {
    debugger;
	console.log(this.message);	
}
warning("m");
console.log(message);