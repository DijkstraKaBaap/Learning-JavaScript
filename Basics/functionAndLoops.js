// function and loops
function toCalculateAddition(a, b){
    console.log("sum of these no.s is: ")
    let number;
    number = a + b;
    console.log(number)
}

function Fibonacci(x, y){
    console.log("Fibonacci sequence upto 10th sum")
    var temporary1, sum;
    var limit = 0;
    while(limit < 10){
        sum = x + y;
        console.log(sum);
        temporary1 = x;
        x = y;
        y = sum;
        limit++;
    }
}

function MulTable(no){
    console.log("%d Multiplication Table", no)
    for(i = 0; i < 11; i++){
        console.log("88 X %d = %d", i, no * i);
    }
}

let number1 = 5;
let number2 = 4;
let nthTable = 88;
toCalculateAddition(number1, number2);
Fibonacci(number1, number2);
MulTable(nthTable);