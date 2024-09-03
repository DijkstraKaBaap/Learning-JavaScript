var number = 1;
if(number > 6){
    console.log("The number is bigger than 6")
}
else if(number = 0) {
    console.log("The number is 0")
}
else{
    console.log("The number is less than 6")
}

/*----------- Ternary Operator ---------*/
// used for simple True or False type statements. 
// Can be used instead of if-else.

const anotherNo = 4
console.log((anotherNo > 5) ? "This no. is greater than 5" : "This no. is less than 5")

/*----------- Switch Case ---------*/
// choice type control statement
let day = 5;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}
