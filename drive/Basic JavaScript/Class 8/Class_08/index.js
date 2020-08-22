function countRabbits() { 
	for(let i=1; i<=3; i++) { 
		alert("Rabbit number " + i); 
	} 
}

//let btnHello = document.getElementById("btnHello");

// btnHello.onclick = function(){
//     alert("Smoke");
// }

function sayHello(){
    alert("Hello");
}

//btnHello.onclick = sayHello;

// function x(y){
//     console.log(y);
//     y();
// }
// x(sayHello);

//let userName = document.getElementById("userName");

// userName.addEventListener("blur",function(){
//     console.log(`Hello ${userName.value}`);
// },false);


// userName.addEventListener("keyup",function(event){
//     debugger;
//     console.log(event.target.value);
// });


// for(let elem of document.querySelectorAll('*')) {
//     elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true);
// }

// for(let elem of document.querySelectorAll('*')) {
//     elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));
// }

let user = document.getElementById("userName");
let btn = document.getElementById("btnCheck");

btn.addEventListener("click",function(){
    checkUsername(5);
},false);

function checkUsername(minLength){
    debugger;
    if(user.value.length < minLength){
        alert("User name to short");
    }else{
        alert("User name taman");
    }
}