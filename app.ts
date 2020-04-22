// UNION TYPES
// This gives flexibility when a function nedds to accept various types
// e.g. numbers, strings, booleans e.t.c

function combine(input1: number | string, input2: number | string, resultConversion: string){
    let results
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        results = input1 + input2
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