const xa = 5;
const ya = 3 - -xa;
console.log(ya);

const a ="5";
const b = 3 + +a;
console.log(b);

let x = 2;
const r1 = x++ + x++;
const r2 = ++x + ++x;
const r3 = x++ + ++x;
const r4 = ++x + x++;
console.log(`x: ${x} r1: ${r1} r2: ${r2} r3: ${r3} r4: ${r4}`);

let y = 10;
const r5 = y-- + y--;
const r6 = --y + --y;
const r7 = y-- + --y;
const r8 = --y + y--;
console.log(`y: ${y} r5: ${r5} r6: ${r6} r7: ${r7} r8: ${r8}`);

//operator precedence PEMDAS
let xb = 3, yb;
xb += yb = 6*5/2;
console.log("Precedencia: " + xb);

//comparison operators
const n = 5;
const s = "5";
console.log(n===s);
console.log(n!==s);
console.log(n===Number(s));
console.log(n !== Number(s));
console.log(n==s);
console.log(n!=s);

//comparing numbers
let n1 = 0;
while(true) {
    n1 += 0.1;
    if(n1>0.3) break;
}
console.log(`Without EPSILON: Stopped at ${n1}`);

let n2 = 0;
while(true){
    n2 += 0.1;
    if(Math.abs(n2 -0.3) < Number.EPSILON) break;
}
console.log(`With EPSILON: Stopped at ${n2}`);



// logical operators

// falsy 
// JavaScript considers the following values to be falsy:
//      undefined, null, false, 0, NaN, '' (an empty string)

//type return
console.log(typeof undefined);
console.log(typeof null);

//assignment operators
console.log("\nexercise 4 -> assignment operators");

let v21, v0;
v21 = v0 = 9.8;

const nums = [3,5,15,7,5];
let n21, i=0;
while ((n1 = nums[i] )< 10, i++ < nums.length) {
    if(n1 < 10){
        console.log(`Number less than 10: ${n1}`);
    }
    
}
console.log(`Number greater than 10 found: ${n1}.`);
console.log(`${nums.length} numbers remain. `);

//destructuring assignment
console.log("\nexercise 5 -> destructuring assignment");
console.log("\nexercise 5.1 -> destructuring assignment");

const arr = [1,2,3,4,5];
let [x22,y22,...rest] = arr;
console.log(x22);
console.log(y22);
console.log(rest);
console.log("\nexercise 5.2 -> destructuring assignment");

let a51=5, b51=10;
[a51,b51]= [b51,a51];
console.log(a51);
console.log(b51);

//object and array operators

