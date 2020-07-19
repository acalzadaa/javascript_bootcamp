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