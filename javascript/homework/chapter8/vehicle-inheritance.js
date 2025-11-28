function Vehicle(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

Vehicle.prototype.getInfo = function() {
    return `${this.year} ${this.color} ${this.make} ${this.model}`;
}

// Car child constructor class
function Car(make, model, year, color, numDoors) {
    Vehicle.call(this, make, model, year, color);
    this.numDoors = numDoors;
}

// Truck child constructor class
function Truck(make, model, year, color, bedLength) {
    Vehicle.call(this, make, model, year, color);
    this.bedLength = bedLength; 
}

// Inherit from vehicle first
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;


// Can use prototype methods after inheritance
Car.prototype.honk = function() {
    return "Beep beep!";
}

Truck.prototype.loadCargo = function() {
    return "Cargo has been loaded.";
}

let camry = new Car("Toyota", "Camry", 2020, "blue", 4);
let raptor = new Truck("Ford", "Raptor", 2021, "red", "short");

console.log(camry.getInfo());
console.log(camry.honk());
console.log(raptor.getInfo());
console.log(raptor.loadCargo());