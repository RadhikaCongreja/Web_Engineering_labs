/* Easy: Array Practice
Write a function called reverseArray that takes an array as input and returns a new array
with the elements reversed. For example, reverseArray([1, 2, 3]) should return [3,2,1]. */
function reverseArray(arr) {
    return arr.reverse();
}

console.log(reverseArray([1, 2, 3]));


/* Medium: Object Practice
Create an object named car with properties brand, model, and year. Write a function called
carInfo that takes the car object as input and returns a string with the car's information. For
example, if car has the values { brand: 'Toyota', model: 'Camry', year: 2022 }, the function
should return 'The Toyota Camry was manufactured in 2022. */

var  car = {brand:'Toyota',model:'Camry',year:2022};
function carInfo(c){
   var str= "The "+ c.brand +" "+ c.model+ " was manufactured in "+ c.year +". ";
   return str;
}
console.log("\n",carInfo(car));


/* Hard: Function Practice
Write a higher-order function called applyFunction that takes two arguments: an array of
numbers and a function. The function should apply the given function to each element of
the array and return a new array with the results. For example, if the array is [1, 2, 3] and
the function is (x) => x * 2, the result  should be [2, 4, 6]. */

var  numbers=[1,2,3];
console.log("\n",applyFunction(numbers,(x)=>x*2));

function applyFunction(numbs,func){
    var res=[];
    for(let i=0;i<numbs.length;i++){
        res.push(func(numbs[i]))
    }   
    return res;     
}
