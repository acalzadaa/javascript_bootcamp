// Scope

function f7(x7){
    return x7 +3;
}

console.log(f7(5));

// Scope Versus Existence
// javascript has a garbage collector

// Lexical Versus Dynamic Scoping

function f71(){
    console.log('one');
}

function f72(){
    console.log('two');
}

f72();
f71();
f72();


const x = 3;
function f73(){
    console.log(x);
    console.log(y); //is not defined yet!!!!
}

const y = 4;
f73();

// global scope

// highly dependent... bad

/* let name = 'Irena';
let age = 25;

function greet(){
    console.log(`Hello, ${name}`);
}

function getBirthYear(){
    return new Date().getFullYear - age;
} */

// mildly depend... better

let user = {
    name: 'Irena',
    age:  25,
}
/* 
function greet(){
    console.log(`Hello, ${user.name}`);
}

function getBirthYear(){
    return new Date().getFullYear - user.age;
} */

// totally independent... best!

function greet(userX){
    console.log("hola: " + userX.name);
}

function getBirthYear(userX){
    return new Date().getFullYear() - userX.age;
}

greet(user);
console.log("Nacio en el año: " + getBirthYear(user));



// Functions, Closures, and Lexical Scope

let globalFunc;
{
    let blockVar = 'super closure variable';
    globalFunc = function () {
        console.log("Inside Clousure function!: " + blockVar);
    }
}
globalFunc();

let fclosure;
{
    let o = {note: 'This message is Super safe!'};
    fclosure = function() {
        return o;
    }
}

console.log(fclosure().note);

let oRef = fclosure();
oRef.note = "Ha! This message was Not so safe after all";

console.log(oRef.note);

// Immediately Invoked Function Expressions

const message = (function() {
    const secret = "I'm secret!!";
    return `The secret is ${secret.length} characters long.`;
})();
console.log(message);


const iife = (function(){
    let count = 0;
    return function(){
        return `I have been called ${++count} time(s)`;
    }
})();

iife();
iife();

// Function Scope and Hoisting

// When you declare a variable with "let", it doesn’t spring into existence until you
// declare it. 

//letting;
// eslint-disable-next-line no-unused-vars
let letting; //let marca error porque fue utilizado antes de ser declarado!!!!
//letting = 3;
//console.log(letting);


// When you declare a variable with "var", it’s available everywhere in the current
// scope…even before it’s declared

//hoisting;
var hoisting; // var no marca error porque su existencia sucede incluso antes de que sea declarada!!!
hoisting = 3;
console.log("hoisting: " + hoisting);

// Function Hoisting

functionHoisting();
function functionHoisting(){
    console.log('f');
}

// not hoisted -> marcara error!!!
// functionNotHoisted();
// let functionNotHoisted = function() {
//     console.log('f');
// }

console.log(typeof typeof 3);