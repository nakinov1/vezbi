var hotel = {
    name: "In",
    rooms: 5,
    gym:true
}
console.log(hotel.gym);
console.log(hotel["name"]);
hotel.name = "Acc";
hotel["name"] = "Laki";
hotel.pool = true;


let newHotel = new Object();
newHotel.name = "Lak 2.0";
newHotel["pool"] = true;
console.log(newHotel);
delete newHotel.pool;
console.log(newHotel);

function Person(name, age, job){
    debugger;
    this.name = name;
    this.age = age;
    this.job = job;
    this.printName = function(message){
        console.log(`${this.name} kaza ${message}`);
    }
}

debugger;
let personOne = new Person("Dejan", 22, true);
let jsonPerson = JSON.stringify(personOne);
console.log(jsonPerson);

let personTwo = new Person("Filip", 34, false);
personOne.printName("hey");
personTwo.printName("zdravo!!!");

function printObj(){
    var student = {
        name : "David Rayy",
        sclass : "VI", 
        rollno : 12
    }
    // console.log(`${student.name}, ${student.sclass}, ${student.rollno}`);
    var studentStr = Object.values(student).toString();
    console.log(studentStr);
    return student.hasOwnProperty("lastName");
}
console.log(printObj());



