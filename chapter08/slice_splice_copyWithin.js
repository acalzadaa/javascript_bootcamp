
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