
//const carProps = new WeakMap();

class Car {

    constructor(make, model) {
        this._make = make;
        this._model = model;
        this._userGears = ["P", "N", "R", "D"];
        this._userGear = this._userGears[0];
    }

    shift(gear) { this._userGear = gear }

    get userGear() { return this._userGear; }
    set userGear(value) {
        if (this._userGears.indexOf(value.toUpperCase()) < 0)
            throw new Error(`Invalid gear: ${value}`);
        this._userGear = value.toUpperCase();
    }
}

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");

console.log(car1 instanceof Car);
console.log(car2 instanceof Array);

car1.shift("D");
car2.shift("P");
console.log(car1.userGear);
console.log(car2.userGear);

car1.userGear();
car1.userGear("P");

