//Array Searching

const o = { id: 2, name: "Jerry" };
const arr80 = [1, 5, "a", o, true, 5, [1, 2], "9"];
console.log(arr80.indexOf(1));
console.log(arr80.indexOf(5));
console.log(arr80.indexOf("a", 1));

console.log(arr80.lastIndexOf(true, 5));
console.log(arr80.lastIndexOf("9"));

console.log(arr80.findIndex(a => a.id === 2)); // find the index of object "o" 

console.log(arr80.find(a => a.id === 2)); // find the object "o"


class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}

Person.nextId = 0;

const jamie = new Person("Jamie"), juliet = new Person("Juliet"), peter = new Person("Peter");
const arr90 = [jamie, juliet, peter];

console.log(arr90.find(a => a.name === "Jamie"));
console.log(arr90.find(a => a.id === juliet.id));

// some returns true if it finds an element that meets the criteria (all it needs is one; it’ll 
// stop looking after it finds the first one), and false otherwise

const arr91 = [52, 74, 12, 152, 17];
console.log(arr91.some(x => x % 2 === 0));// SOME!!! arr91 alias x -> if ONE element of x (%2 == 0) then ... true else false

// every returns true if every element in the array passes the criteria, and false otherwise.
// every will stop looking and return false if it finds an element that doesn’t
// match the criteria

console.log(arr91.every(x => x % 2 === 0)); // EVERY!!! arr91 alias x -> if ALL x (%2 == 0) then ... true else false





