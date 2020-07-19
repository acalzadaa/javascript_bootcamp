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

let tally = fruitBasket.reduce((tally, fruit) => { // tally EMPTY VARIABLE, fruit INITIALIZED VARIABLE, index, array
    tally[fruit] = (tally[fruit] || 0) + 1; // tally[fruit] -> "unasigned" when empty
    return tally;
}, {});

console.log(tally);