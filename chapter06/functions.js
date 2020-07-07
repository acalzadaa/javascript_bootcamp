//function for sayHello
function sayHello() {
    console.log("Hello world!");
    console.log("¡Hola mundo!");
    console.log("Hallo wereld!");
    console.log("Привет мир!");
}

//function for greeting
function getGreeting() {
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
const arr = [1, 2, 3]
arr[1] = getGreeting;
console.log(arr[1]());


//function arguments
function avg(a, b) {
    return (a + b) / 2;
}

console.log(avg(5, 10));

const a2 = 5, b2 = 10;
avg(a2, b2);

function fn(x) {
    console.log(`inside f: x= ${x}`);
    x = 5;
    console.log(`inside f: x=${x} (after)`);
}

let x = 3;
console.log(`before calling f: x=${x}`);
fn(x);
console.log(`after calling f: x=${x}`);

//Destructuring Arguments

//receiving objects
function getSentense({ subject, verb, object }) {
    return `${subject} ${verb} ${object}`;
}

const ox = {
    subject: "I", verb: "Love", object: "Javascript",
};

console.log(getSentense(ox));

const arrx = ["I", "Love", "Javascript"];

// receiving arrays
function getSentenses([subject, verb, object]) {
    return `${subject} ${verb} ${object}`;
}

console.log(getSentenses(arrx));

//Spread Operator to collect additional arguments

function addPrefix(prefix, ...words) {
    const prefixedWords = [];
    for (let i = 0; i < words.length; i++) {
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}

console.log(addPrefix("anti", "aereo", "tanque", "acido", "geno"));

// Default Arguments

function defaults(a, b = "default", c = 3) {
    return `${a} - ${b} - ${c}`;
}

console.log(defaults(5, 6, 7));
console.log(defaults(5, 6));
console.log(defaults(5));
console.log(defaults());

// Functions as Properties of Objects

const objects = {
    name: 'Wallace',
    bark() { return 'Woof!'; },
}


console.log(objects.name);
console.log(objects.bark());

// the this keyword

const objects2 = {
    name: 'Wallace',
    speak() { return `My name is ${this.name}` }
}

console.log(objects2.name);
console.log(objects2.speak());

const speak = objects2.speak;

console.log(speak === objects2.speak);
console.log(speak);

//Function Expressions and Anonymous Functions

// const g = function f(someVar) {
//     if (someVar) console.log('f stoped');
//     f(true);
// };
// g(false);

//Arrow Notation

const f1 = () => "hello!";
console.log(f1());

const f2 = name => `Hello, ${name}!`;
console.log(f2("alex"));

const f3 = (a, b) => a + b;
console.log(f3(3, 5));

//call, apply, and bind

const bruce = { name: "Bruce" };
const madeline = { name: "Madeline" };

function greet() {
    return `Hello, I'm ${this.name}!`;
}

console.log(greet);
console.log(greet.call(bruce));
console.log(greet.call(madeline));

function update(birthDay, occupation) {
    this.birthDay = birthDay;
    this.occupation = occupation;
}
update.call(bruce, 1949, 'singer')
console.log(update);
update.call(madeline, 1942, 'actress')
console.log(update);

// apply is useful if you’ve got an array 
// and you want to use its values as arguments to a function
update.apply(bruce, [1955, 'actor'])
update.apply(madeline, [1918, 'writer'])

const array = [2,3,-5, 15, 7];
console.log(Math.min.apply(null, array));
console.log(Math.max.apply(null, array));

const newBruce = [1940, 'martial artist'];
update.call(bruce, ... newBruce)
console.log(update);

console.log(Math.min(...array));
console.log(Math.max(...array))