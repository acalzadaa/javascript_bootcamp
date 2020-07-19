class Car {
    static getNextVin() {
        return Car.nextVin++;
    }

    constructor(make, model) {
        this._make = make;
        this._model = model;
        this._vin = Car.getNextVin();
    }

    get vin() {return this._vin;}

    static areSimilar(car1, car2) {
        return car1._make === car2._make && car1._model === car2._model;
    }

    static areSame(car1, car2) {
        return car1._vin === car2._vin;
    }
}

Car.nextVin = 0;

const car1 = new Car("Tesla", "S");
const car2 = new Car("Mazda", "3");
const car3 = new Car("Mazda", "3");

console.log(car1.vin);
console.log(car2.vin);
console.log(car3.vin);

console.log(Car.areSimilar(car1, car2));
console.log(Car.areSimilar(car2, car3));

console.log(Car.areSame(car1,car2));
console.log(Car.areSame(car2,car3));