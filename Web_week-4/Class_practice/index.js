console.log("Hello World!"); 

var age = 25;
let name = "John";
const PI = 3.14;

var num = 10;
var str = "Hello, world!";
var isTrue = true;
var isFalse = false;
var numAsString = "10";
var numAsNumber = parseInt(numAsString);

var colors = ["red", "green", "blue"];


// for(var i=0; i<colors.length; i++){
//     console.log(colors[i]);
// }

var person = {
    name: "John", cms: "021-21-0008", address: {street: "122", city: "sukkur"} };

console.log(person.name)
//console.log(person.keys(person))
keys = Object.keys(person)
console.log(keys)

for(const keys in person){
    console.log(person[keys]);
}

for(x in colors){
    console.log(colors[x]);
}