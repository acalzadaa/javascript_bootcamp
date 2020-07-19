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

class Motorcycle extends Vehicle {}

const c = new Car();
const m = new Motorcycle();

c instanceof Car; //true
c instanceof Vehicle; //true (by inheritance)

m instanceof Car; //false (not related by any means)
m instanceof Motorcycle; //true
m instanceof Vehicle; //true (by inheritance)

