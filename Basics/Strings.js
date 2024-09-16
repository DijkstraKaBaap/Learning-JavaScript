// strings and methods

var someString = "What you do in life, echoes in eternity.";
var saidBy = "Maximus Decimus Meridius"

console.log(someString.length);             // includes the spaces
console.log(someString.charAt(7));          // includes the spaces
console.log(someString.toUpperCase());
console.log(someString.italics());
console.log(someString.indexOf("eternity"));     // finds the index of first letter

//lastIndexOf(substring, position)
console.log(someString.lastIndexOf("e"));      // finds the last occurence
//includes(substring)
console.log(someString.includes("life"));
//startsWith(substring)
console.log(someString.startsWith("What"));
//endssWith(substring)
console.log(someString.endsWith("night"));
// slice(start, end)
console.log(someString.slice(0,-13));             // end is exclusive
// substring(start, end)
console.log(someString.substring(1, 9))           // dosent do negative indices
// split(separator)
console.log(someString.split(" "));               // " " is supposed to be the separator
// replace(oldvalue, newvalue)
console.log(someString.replace("life", "jeevan"));
// repeat(count)
// console.log(someString.repeat(10));
// concat(strings)
console.log(someString.concat(" ", saidBy));