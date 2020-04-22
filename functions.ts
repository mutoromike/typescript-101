// Functions


function add(n1: number, n2: number){
    return n1 + n2
}

function printRes(num: number){
    console.log("Result is: " + num)
}

printRes(add(20, 30))

let combineValues: (a: number, b: number) => number
// This tells TS that combineValues stores a function that returns a number
// and also always specify the variable that the respective function takes,
// in this case, 2 numbers.

combineValues = add // this won't yield an error
// combineValues = printRes // this yields an error

console.log(combineValues(8, 9))

// you can also pass a function to a function

function functionHandler(a: number, b: number, c: (num: number) => void) {
    let result = a + b
    c(result)
}

functionHandler(5, 10, (result) => {
    console.log(result)
})
// Void means the function is not returning anything