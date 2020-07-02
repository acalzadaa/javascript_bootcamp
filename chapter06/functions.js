//function for sayHello
function sayHello() {
    console.log("Hello world!");
    console.log("¡Hola mundo!");
    console.log("Hallo wereld!");
    console.log("Привет мир!");
}

//function for greeting
function getGreeting(){
    return "Hello Worldsss";
}

//working with getGreeting
console.log(getGreeting());
sayHello();

//assigning getGreeting
const f = getGreeting;
console.log(f());

//assigning a function to an object property
const o = {}
o.f = getGreeting;
console.log(o.f());

//assigning a function to an object property
const arr = [1,2,3]
arr[1] = getGreeting;
console.log(arr[1]());


//function arguments
function avg(a,b) {
    return (a+b)/2;
}

console.log(avg(5,10));

const a = 5, b = 10;
avg(a,b);

function f(x){
    console.log(`inside f: x= ${x}`);
    x = 5:
    console.log(`inside f: x=${x} (after)`);
}
