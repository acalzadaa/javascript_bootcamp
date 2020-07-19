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


    //adding toString()!!!!
    toString(){
        return `${this._make} ${this._model} ${this._vin}`;
    }    
}

Car.nextVin = 0;

const car1 = new Car("Tesla", "Model S");
console.log(car1.toString());