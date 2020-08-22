function myPrintFunc(x){
    console.log(x);
}
function mySumFunction(num1, num2){
    var result = num1 + num2;
    // function myPrintFunc(x){ //local functon
    //     console.log(x)
    // };
    myPrintFunc(num2);
    return result;
}
var x = mySumFunction(2,5);
console.log(x);
var y = mySumFunction(15,25);
myPrintFunc(y);
console.log(mySumFunction(8,7));
mySumFunction(8,7);
debugger;
function multiply(a, b, c = 1){
    var res = a * b * c;
    return res;
}

var x = multiply(1,2,3);
console.log(x);
var y = multiply(10,20,30,40);
console.log(y);
var z = multiply(5,2);
console.log(z);