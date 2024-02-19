console.log("Starting...");
var arr = ['a', 'b', 'c', 'd'];
console.log("before: ",arr);
arr.push('e');
console.log("after",arr);
arr.pop();
console.log("after poping: ",arr);
arr.shift();
console.log("after shifting: ",arr);
arr.unshift('a','f');
console.log("after unshifting: ",arr);

var arr2 = ['1', '2', '3'];
var arr3 = arr.concat(arr2);
console.log("concatenated array: ",arr3);

console.log("slicing: ",arr3.slice(0, 4)); 
console.log("splicing: ",arr3.splice(1, 2));
console.log("spliced array: ",arr3);
console.log("indexOf: ",arr3.indexOf('a'));
console.log("lastIndexOf: ",arr3.lastIndexOf('1'));
console.log("includes: ",arr3.includes('c'));

const myobj = {name:"John", age:30, city:"New York"};
console.log(`Name is ${myobj.name} and I am ${myobj.age} years old living in ${myobj.city}`);
Object.keys(myobj);   // returns an array of the object's own enumerable property names ["name","age","city"]
console.log(Object.keys(myobj));
console.log(Object.values(myobj));
console.log(Object.entries(myobj));
const dict = {key1 : "value1", key2 : "value2"};
console.log(Object.assign(myobj, dict));
console.log(Object.getOwnPropertyNames(myobj));
console.log(Object.freeze(myobj));
console.log(Object.seal(myobj));

function greet(name) {
    return 'Hello, ' + name + '!';
    }
console.log(greet("radhika"));

const greet1 = (name) => {
    return 'Hello, ' + name + '!';
    };

 console.log(greet1("radhika"));

const greet2 = function(name) {
    return 'Hello, ' + name + '!';
    };
    console.log(greet2("radhika"));

(function() {
    console.log('I am immediately invoked.');
    })();

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
    return num * 2;
    });
console.log(doubled);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var num = 3;
function doubled(arr, num) {
    for(i=0; i<arr.length; i++){
        arr[i] = arr[i] * num;
    }
    }
console.log(doubled(arr, num));
for(i=0; i<arr.length; i++){
    console.log(arr[i]);
}

var str = ["hello", "this", "is", "sukkur", "IBA"];
console.log(str.length);

var arr2 = [1, 2, 3, 4];
// arr2.forEach(function(val){return val*2});
console.log(arr2.map(function(val){return val*2}));
console.log(arr2.map(function(val){return val%2}));
console.log(arr2.filter(item=> item % 2 !=0));
console.log(str.filter(item => item.includes('hello')));

console.log([1, 2, 3, 4, 5, 6, 7].reduce((total, item) => {
    return total+item;
}, 0));