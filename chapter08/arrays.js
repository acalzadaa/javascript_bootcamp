//A Review of Arrays

// array literals

const arr1 = [1, 2, 3, ["alex", 2, 3, 4, [66, 55, [123, 332, 12], 44], 5], 76];
Array.isArray(arr1);
const arr2 = arr1.flat(Infinity);
console.log(arr2.sort());

console.log(`Original Size: ${arr2.length}`);
arr2[15] = 999;
console.log(`Adding a new element!`);
console.log(`New Size: ${arr2.length}`);

//constructors

const arr5 = new Array();
console.log(arr5);
const arr6 = new Array(1, 2, 3);
console.log(arr6);
const arr7 = new Array(2);
console.log(arr7);
const arr8 = new Array("2");
console.log(arr8);

//Array Content Manipulation

//Adding or Removing Single Elements at the Beginning or End
// RIGHT: push add to the right... pop extract from the right 
// LEFT:  shift extract from the left ... unshift add to left

console.log("Exercise: Push, Pop, Unshift, Shift ");

const arr10 = ["b", "c", "d"];
console.log(`Array Original: ${arr10}`);

console.log(arr10.push("e"));
console.log(`Array after push: ${arr10}`);

console.log(arr10.pop());
console.log(`Array after pop: ${arr10}`);

console.log(arr10.unshift("a"));
console.log(`Array after unshift: ${arr10}`);

console.log(arr10.shift());
console.log(`Array after shift: ${arr10}`);

//Adding Multiple Elements at the End
console.log("Exercise: Concat ");

const arr20 = [1, 2, 3];
const arr21 = arr20.concat(4, 5, 6);
console.log(arr21);

const arr22 = arr20.concat([4, 5, 6]);
console.log(arr22);

const arr23 = arr20.concat([4, 5], 6);
console.log(arr23);

const arr24 = arr20.concat(4, [5, 6]);
console.log(arr24);


// Getting a Subarray slice(start index, end index not inclusive)
console.log("Exercise: Slice ");
const arr31 = [1, 2, 3, 4, 5];
console.log(arr31.slice(3));

console.log(arr31.slice(2, 4));

console.log(arr31.slice(-2));

console.log(arr31.slice(1, -2));

console.log(arr31.slice(-2, -1));

// Adding or Removing Elements at Any Position
// splice allows you to do in-place modification of the string, 
// adding and/or removing elements from any index.
console.log("Exercise: Splice ");

const arr40 = [1, 5, 7];
console.log(arr40);
arr40.splice(1, 0, 2, 3, 4); // (start index, number of elements to change, ... elements to add

console.log(arr40);
arr40.splice(5, 0, 6)

console.log(arr40);
arr40.splice(1, 2)

console.log(arr40);
arr40.splice(2, 1, 'a', 'b');

console.log(arr40);

// Cutting and Replacing Within an Array
console.log("Exercise: copyWithin ");

const arr50 = [1, 2, 3, 4];
arr50.copyWithin(1, 2)
console.log(arr50);

arr50.copyWithin(2, 0, 2);
console.log(arr50);

arr50.copyWithin(0, -3, -1); //insert in index 0, from right to left from index -1 not inclusive to -3 inclusive
console.log(arr50);

// Filling an Array with a Specific Value
console.log("Exercise: Fill ");

const arr60 = new Array(5).fill(1);
console.log(arr60);
arr60.fill("a");
console.log(arr60);
arr60.fill("b", 1);
console.log(arr60);
arr60.fill("c", 2, 4);
console.log(arr60);
arr60.fill(0, -3, -1); // fill with '0's from -1 to -3 NOT INCLUSIVE
console.log(arr60);

//Reversing and Sorting Arrays
console.log("Exercise: Reverse, Sort ");

const arr70 = [1, 2, 3, 4, 5];
console.log(arr70);
arr70.reverse();
console.log(arr70);
arr70.sort();
console.log(arr70);

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

// The Fundamental Array Operations: map and filter

//map transforms the elements in the array
const cart = [{ name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }];

const names = cart.map(x => x.name);
console.log(names);

const prices = cart.map(x => x.price);
console.log(prices);

const discountPrices = prices.map(x => x * 0.8);
console.log(discountPrices);

const lcNames = names.map(x => x.toLowerCase());
console.log(lcNames);


// Create a deck of cards!

// filter, as the name implies, is designed to remove unwanted things from an array. 
// Like map, it returns a new array with elements removed.

const cards = [];
for (let suit of ['H', 'C', 'D', 'S'])
    for (let value = 1; value <= 13; value++)
        cards.push({ suit, value });

// get all DIAMONDS
console.log(cards.filter(c => c.suit === 'D'));

// get all FACE cards
console.log(cards.filter(c => c.value > 10))
    ;

//get all FACE cards and HEARTS
cards.filter(c => c.value > 10 && c.suit === 'H');

//Array Magic: reduce
console.log("Javascript: Reduce Lesson");

// array.reduce( (value, currentValue, INDEX, ARRAY) 0> { } , INITIAL_VALUE);
// value -> temp variable, starts with the value of index === 0 
// currentValue -> iterating value from an ARRAY
// index -> CURRENT index of the iterating value
// array -> the WHOLE array

const euros = [29.76, 41.85, 46.5];

console.log("Reduce -> Sum");

const sum = euros.reduce((total, amount) => total + amount);
console.log(sum);


console.log("Reduce -> Avg");

const average = euros.reduce((total, amount, index, array) => {
    total += amount;
    if (index === array.length - 1) {
        return total / array.length
    } else {
        return total;
    }
});

console.log(average);

console.log("Reduce -> Doubled");

const doubled = euros.reduce((total, amount) => {
    total.push(amount * 2);
    return total;
}, []);

console.log(doubled);

console.log("Reduce -> Above 30");

const above30 = euros.reduce((total, amount) => {
    if (amount > 30) {
        total.push(amount);
    }
    return total;
}, [])

console.log(above30);

const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];

let tally = fruitBasket.reduce( (tally, fruit) => {
    tally[fruit] = (tally[fruit] || 0) +1; // tally[fruit] -> "unasigned" when empty
    return tally;
},{});

console.log(tally);