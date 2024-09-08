// Objects in JavaScript
let car = {
    brand : "Toyota",
    name : "Corolla",
    make : 2022,
    owner : "Mr. Dijkstra",
    drive : function(){
        console.log("The car is driving right now!")
    },
    badgeToPrint : function(){
        return this.brand + " " + this.name;
    }
};
console.log(car);
console.log(car["make"]);

// functions inside the objects are called methods
var x = car;            // x IS car.
x.drive();
x.badgeToPrint();

// object properties