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