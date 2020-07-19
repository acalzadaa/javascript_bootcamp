class Super {
    constructor() {
        this._name = "Super";
        this._isSuper = true;
    }
}

    Super.prototype.sneaky = "NOT RECOMENDED!!";

class Sub extends Super {
    constructor() {
        super();
        this._name = "Sub";
        this._isSub = true;
    }
}

const obj = new Sub();


// only lists objects created on the prototype and IGNORES all properties manually added to superclass! yeah!
Object.keys(obj).forEach(properties =>
    console.log(`${properties} : ${obj[properties]}`)
);