class InsurancePolicy() {}

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

function makeInsurable(o){
    o.addInsurancePolicy = function(p) { this.insurancePolicy = p;}
    o.getInsurancePolicy = function() { return this.insurancePolicy; }
    o.inInsurance = function() { return !!this.insurancePolicy; }
}

const car1 = new Car();
makeInsurable(car1);
car1.addInsurancePolicy(new InsurancePolicy());

