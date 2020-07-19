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







