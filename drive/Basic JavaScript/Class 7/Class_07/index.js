function A1() {
    debugger;
    var a = "A";
    function A2() {
        var b = "B";
        console.log(a + " " + b +" ");
        function A3() {
            var c = "C";
            console.log(a + " "+ b + " "+ c);
        }
        A3();
    }
    A2();
    
}
//A1();

function A4(param1, param2 = " ", ...param) {
    debugger;
    if(param.length > 0){
        console.log(param[0]);
    }
    var d = param1 + param2;
    console.log(a+ " "+d+" "+b);
}
// A4(1,2);

// var newFunc = (a,b,c) => {
//     var z = a+b+c;
//     return z;
// }
// newFunc(1,2,3);


// function funcName(){
//     return 2+5;
// }
// funcName();
var varFunc = function(){
    let y= false;
    console.log(y);
}
varFunc();

var x = 1;
var x = "Dejan";
var x = true;
console.log(x);

let y = "Riste";
console.log(y);

y = true;
console.log(y);

