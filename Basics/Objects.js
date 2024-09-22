// Objects in JavaScript
const mysym = Symbol("night")

let car = {
    brand : "Toyota",
    name : "Corolla",
    make : 2022,
    owner : "Mr. Dijkstra",
    mysym : Symbol("Day"),
    drive : function(){
        console.log("The car is driving right now!")
    },
    badgeToPrint : function(){
        return this.brand + " " + this.name;
    }
};

console.log(car.owner);
console.log(car["make"]);                         // more prefered method
let action = car.drive
car["car"]()                                    // does not output from function as property not considered a string
car.drive

// functions inside the objects are called methods
var x = car;                                      // x IS car.
console.log(x.badgeToPrint());
console.log(x.mysym)
console.log(mysym)

// object properties