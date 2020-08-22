debugger
var numbers = [15, 1, 58, 69,3];
var maxNumber = -Infinity;//0
for(var i=0; i<numbers.length; i++){
    if(numbers[i]>maxNumber){
        maxNumber = numbers[i];
    }
}
console.log(maxNumber);
