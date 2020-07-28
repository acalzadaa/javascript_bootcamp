const roles = new Set();
roles.add("User");
roles.add("Admin");
console.log(roles.size);

roles.add("User");
console.log(roles.size);

roles.delete("User");
console.log(roles.size);

console.log(roles);

console.log(roles.delete("User"));