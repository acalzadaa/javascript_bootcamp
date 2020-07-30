function* rainbow() {// the asterisk marks this as a generator
    yield 'red';
    yield 'orange';
    yield 'purple';
    yield 'yellow';
    yield 'blue';
    yield 'indigo';
    yield 'violet';
}

const gen1 = rainbow();
gen1.next(); // { value: "red", done: false }
gen1.next(); // { value: "orange", done: false }
gen1.next(); // { value: "yellow", done: false }
gen1.next(); // { value: "green", done: false }
gen1.next(); // { value: "blue", done: false }
gen1.next(); // { value: "indigo", done: false }
gen1.next(); // { value: "violet", done: false }
gen1.next(); // { value: undefined, done: true }

for (let color of rainbow()) {
    console.log(color);
}

function* interrogate() {
    const name = yield "What is your name?";
    const color = yield "What is your favorite color?";
    return `${name}'s favorite color is ${color}.`;
}

let gen2 = interrogate();

console.log(gen2.next());
console.log(gen2.next('Ethan'));
console.log(gen2.next('Orange'));

for(let m of interrogate()){
    console.log(m);
}

//Generators and return

function* abc() {
    yield 'a';
    yield 'b';
    return 'c';
}

let gen3 = abc();
console.log(gen3.next());
console.log(gen3.next());
console.log(gen3.next());

for (let l of abc()) {
    console.log(l);
}