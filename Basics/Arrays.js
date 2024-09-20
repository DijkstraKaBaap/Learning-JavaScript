// arrays

const myArray = [0, 1, 2, 3, 4, 5]
console.log(myArray)

myArray.push(6)
console.log(myArray)
myArray.unshift(1)
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.shift()
console.log(myArray)


console.log(myArray.slice(1,4))                  // returns a new array containing the portion of the array
console.log(myArray)
console.log(myArray.splice(1,4))                 // alters the orignal array and prints the returned new array
console.log(myArray)

const dc_heroes = ["batman", "superman","flash"]
const marvel_heroes = ["ironman", "captain.A", "thor"]

// dc_heroes.push(marvel_heroes)
// console.log(dc_heroes)                                  // pushes straightaway

var allHeroes = dc_heroes.concat(marvel_heroes)
console.log(allHeroes)

var allNewHeroes = [...dc_heroes, ...marvel_heroes]
console.log(allNewHeroes)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("abcd"))
console.log(Array.from("Dijkstra"))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));