/* eslint-disable no-unused-vars */
const u1 = {name: 'Olivia'};
const u2 = {name: 'Jackson'};
const u3 = {name: 'Olive'};
const u4 = {name: 'James'};

const userRoles = new Map();

userRoles.set(u1,'User');
userRoles.set(u2,'User');
userRoles.set(u3,'Admin');

const userRoles2 = new Map([
    [u1,'User'],
    [u2,'User'],
    [u3,'Admin'],
]);

const userRoles3 = new Map();
userRoles3
    .set(u1,'User')
    .set(u2,'User')
    .set(u3, 'Admin');

console.log(userRoles.get(u1));
console.log(userRoles.has(u1));
console.log(userRoles.get(u2));
console.log(userRoles.has(u2));
console.log(userRoles.get(u3));
console.log(userRoles.has(u3));
console.log(userRoles.get(u4));//doesn't exist!!
console.log(userRoles.has(u4));

console.log(userRoles.get(u1));
userRoles.set(u1,'Newbie');
console.log(userRoles.get(u1));

console.log(userRoles.size);

for(let u of userRoles.keys())
    console.log(u.name);

for(let v of userRoles.values())
    console.log(v);

for(let w of userRoles.entries())
    console.log(`${w[0].name} : ${w[1]}`);

for(let [x,y] of userRoles.entries())
    console.log(`${x.name} : ${y}`);

for(let [a,b] of userRoles) //entries is the default iterator for Map(), no need to specify ".entries()"
    console.log(`${a.name} : ${b}`);

console.log(userRoles.size);
userRoles.delete(u2);
console.log(userRoles.size);

