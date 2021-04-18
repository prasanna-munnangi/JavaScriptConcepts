class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats() {
        return `This cars has ${this.doors}, a ${this.engine} and  a beautiful ${this.color} color!`;
    }
}


class SUV extends Car {
    constructor(doors, engine, color, brand, carStats) {
        // Super is used to call the constructor of the parent class 
        // and to access the parent's properties and methods.
        super(doors, engine, color, carStats);
        this.brand = brand;
        this.wheels = 4;
        this.ac = true;
    }

    myBrand() {
        return console.log(`This SUV is a ${this.brand}`);
    }
}