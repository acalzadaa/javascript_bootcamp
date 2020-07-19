class Vehicle {
    constructor() {
        this._passengers = [];
        console.log("Vehicle Created");
    }

    addPassenger(p) {
        this._passengers.push(p);
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        console.log("Car created");
    }

    deployAirbags(){
        console.log("Shoooosh");
    }
}
console.log("- VEHICLE Class:");
const v = new Vehicle();
v.addPassenger("Peter");
v.addPassenger("John");
console.log(v._passengers);

console.log("- CAR Class:");
const c = new Car();
c.addPassenger("Doe");
c.addPassenger("Barney");
console.log(c._passengers);
console.log(c.deployAirbags());