const name = 'Radhika';
console.log(`Hello, ${name}!`);
const add = (a,b)=> a+b;
console.log(add(3, 5));
const age = 30;
const person = {name, age};
console.log(person);

// Object Destructuring
const numbers = [1,2,3];
const [a,b,c] = numbers;
console.log(numbers); //[1,2,3]
console.log(a, b, c); //1 2 3

function greet(name = "world", ...languages){
    console.log(`hello, ${name}!`);
    console.log("languages: ", ...languages)
}
greet("radhika", numbers);

for(const num of numbers){
    console.log(num);
}


function getData() {
    return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    // Simulating successful completion
    resolve(data);
    // Simulating failure
    // reject(new Error('Failed to fetch data'));
    }, 2000); // Simulating a delay of 2 seconds
    });
    }
    // Consuming the Promise
    getData()
    .then(data => {
    console.log('Data received:', data);
    })
    .catch(error => {
    console.error('Error:', error.message);
    });

