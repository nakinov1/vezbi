function arraysEx(){
    var myColor = ["Red", "Green", "White", "Black"];
    var colorStr = `Colores are: ${myColor[0]}, ${myColor[1]}, ${myColor[2]}, ${myColor[3]}`;
    //console.log(`Colores are: ${myColor}`);
    return colorStr;
}
//console.log(arraysEx);
//console.log(arraysEx());
//arraysEx();
var myArray=["nesto", "error"];
function parmToArray(item1, item2, item3){
    myArray.push(item1, item2, item3);
}

parmToArray("car", true, 2018);
//console.log(myArray);

var days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
var count = 0;
// while(count < days.length){
//     console.log(days[count]);
//     count++;
// }

// var x = false;
// while(x == false){
//     console.log(days[count]);
//     count++; //1
//     x = true;
// }

// var x = true;
// while(x) {//x===true
//     console.log(days[count]);
//     count++; 
//     x = false;
// }
// console.log("----------------");
// var bool = true;
// do {
//     console.log(days[count]);
//     count++;
// }while(count < 3);


// for(var index=0; index <days.length; index++){
//     console.log(days[index]);
// }
for(var i = 0; i<=50; i+=5){
    console.log(i);
}
console.log("----------------");


for(var i = 50; i>=0; i-=5){
    console.log(i);
} 
console.log("----------------");
for(var i = days.length-1; i>=0; i--){
    console.log(days[i]);
}
console.log("----------------");
for(var i = days.length; i>0; i--){
    console.log(days[i-1]);
}