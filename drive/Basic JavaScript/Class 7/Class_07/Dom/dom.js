// debugger;
// let myTitle = document.getElementById("myTitle");
// console.log(myTitle);
// console.log(myTitle.textContent); //myTitle.innerHTML; myTitle.innerText
// myTitle.textContent = "";
// console.log(myTitle.textContent);


let allDivs = document.getElementsByClassName("myDiv");
// //console.log(allDivs);
// console.log(allDivs[0]);
// let firstDivContent = allDivs[0].textContent;
// console.log(firstDivContent);
// let firstDivHtml = allDivs[0].innerHTML;
// console.log(firstDivHtml);
// firstDivHtml.innerHTML = "<h4>I am too cool!</h4>"

// let myParagraph = document.getElementsByTagName("p");
// //console.log(myParagraph);
// //console.log(myParagraph[1]);


let qMyTitle = document.querySelector("#myTitle");
console.log(qMyTitle);

let qAllParagraph = document.querySelectorAll("p");
console.log(qAllParagraph);

let nextSib = allDivs[1].nextElementSibling;
console.log(nextSib);
let prevSib = allDivs[1].previousElementSibling;
console.log(prevSib);



//Bonus Homework
debugger;
let userInput = prompt(); //589
let num = Number(userInput); //parseInt(userInput);

let array = [1000,500,200,100,50,10,5,3,2,1];
// for(let i =0; i< array.length; i++){
//     if(num >= array[i]){
//         let newNum = Math.floor(num / array[i]);
//         num = num % array[i];
//         console.log(`${newNum} bills of ${array[i]}`);
//     }
// }

while(num > 0){
    let remNum = num % 10; // 9 
    num = (num-remNum) /10; // 58

    for(let c =0; c< array.length; c++){
        if(remNum > array[c]){
            remNum = remNum - array[c];
            console.log(`${remNum} bills of ${array[c]}`);
        }
    }
    
}


function myFunc(string, lengthString, end ="..."){
    debugger;
    if(isNaN(lengthString)){
        lengthString = string.length;
    }
    string = string.substring(0,lengthString);
    console.log(string + end);
}

myFunc("This page is really cool. Please don't change anything", 10);
myFunc("This page is really cool. Please don't change anything");
myFunc("This page is really cool. Please don't change anything", 15, "!!!");
