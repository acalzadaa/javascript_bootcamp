const SYM = Symbol();
const o = { a: 1, b: 2, c: 3, [SYM]: 4 };


console.log("Using direct assignment: ");
console.log(o["a"]);

console.log("Using for...in: ");
for (let key in o) {
    console.log(`${key} : ${o[key]}`);
}

console.log("Using Object.keys(): ");
Object.keys(o).forEach(prop => console.log(`${prop} : ${o[prop]}`));

