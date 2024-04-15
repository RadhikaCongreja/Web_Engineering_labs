const user = {
    name : "John",
    password : "123456",
    secret : 123,
    passkey : "pass",
    email : "john@gmail.com"
}

const{password, secret, passkey, ...rest} = user;
console.log(rest);
console.log(user);

const obj= {name : "John",
password : "123456",
secret : 123,
passkey : "pass",
email : "john@gmail.com"};
const obj2 = obj;
//console.log(obj2);
obj.name = "Radhika";
console.log(obj);
console.log(obj2);
const obj3 = {...obj};

console.log('Starting setTimeout example...');
setTimeout(() => {
console.log('This message will be displayed after 2 seconds.');
}, 2000); // 2000 milliseconds = 2 seconds
console.log('setTimeout example scheduled.');
