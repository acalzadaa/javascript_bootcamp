class Car {
    constructor(make, model) {
        this._make = make;
        this._model = model;
        this._userGears = ["P", "N", "R", "D"];
        this._userGear = this._userGears[0];
    }

    shift(gear) { this._userGear = gear.toUpperCase(); }

    get userGear() { return this._userGear; }
    set userGear(value) {
        if (this._userGears.indexOf(value.toUpperCase()) < 0)
            throw new Error(`Invalid gear: ${value}`);
        this._userGear = value.toUpperCase();
    }
}

const car1 = new Car();
const car2 = new Car();

console.log(car1.shift === Car.prototype.shift);
car1.shift("D");
console.log(car1.userGear);
car1.shift("d");
console.log(car1.userGear);

console.log(car1.shift === car2.shift);

car1.shift = function() { this._userGear = "P";}

console.log(car1.shift === car2.shift);
console.log(car1.shift === Car.prototype.shift);