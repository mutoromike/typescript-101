// UNION TYPES
// This gives flexibility when a function nedds to accept various types
// e.g. numbers, strings, booleans e.t.c


// You can declare your own type when using union types, for
// readability, reusability e.t.c, like shown below:

type Combinable = number | string 
// this being a union of number and string and used below
function combine(input1: Combinable, input2: Combinable, resultConversion: string){
    let results
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        results = +input1 + +input2 // +variable converts the respective variable to a number
    } else {
        results = input1.toString() + input2.toString()
    }
    
    return results
    // return num1 + num2
}


const CombineAges = combine(30, 28, 'as-number')
console.log(CombineAges)

const CombineStringAges = combine('30', '28', 'as-number')
console.log(CombineStringAges)

const CombineNames = combine("Alice", "Britt", 'as-text')
console.log(CombineNames)


// Literal types:
// Basing on the example above, literal types are types which are based on the core types
// but then one has a specific version. In the case below, strings.


function combined(
    inputA: number | string,
    inputB: number | string,
    resultConversion: 'as-number' | 'as-text'
){
    let results
    if(typeof inputA === 'number' && typeof inputB === 'number' || resultConversion === 'as-number'){
        results = +inputA + +inputB // +variable converts the respective variable to a number
    } else {
        results = inputA.toString() + inputB.toString()
    }
    
    return results
    // return num1 + num2
}