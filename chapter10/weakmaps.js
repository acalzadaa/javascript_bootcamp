/* eslint-disable no-unused-vars */
/* john va a seguir existiendo en collect a pesar de que john haya sido igualado a null */
let john = { name: 'John'};
let collect = [john];
john = null;

let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok");
//weakMap.set("test", "Whoops") BAD! "test" is not an object
obj = null; //obj se elimina


let john2 = {name: "John"};
let weakMap2 = new WeakMap();
weakMap2.set(john2, "El casillero de John");
console.log(weakMap2.get(john2));
john2 = null;
console.log(weakMap2.get(john2));

// Use case: additional data

let visitsCountMap = new WeakMap();

function countUser(user){
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user,count + 1);
}

let john3 = { name : "John"};

countUser(john3);
console.log(visitsCountMap.get(john3));

countUser(john3);
console.log(visitsCountMap.get(john3));

john3 = null;
console.log(visitsCountMap.get(john3));

// Use case: caching

let cache = new WeakMap();

function process(objs){
    if(!cache.has(objs)){
        let result = objs;
        cache.set(objs, result)
    }
    return cache.get(objs);
}

let obj2 = {name : "Alex"};
process(obj2);
console.log(`${obj2.name} result1`);
console.log(`${cache.get(obj2).name} result1`);

obj2 = null;



