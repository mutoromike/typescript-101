// UNION TYPES
// This gives flexibility when a function nedds to accept various types
// e.g. numbers, strings, booleans e.t.c
// this being a union of number and string and used below
function combine(input1, input2, resultConversion) {
    var results;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        results = +input1 + +input2; // +variable converts the respective variable to a number
    }
    else {
        results = input1.toString() + input2.toString();
    }
    return results;
    // return num1 + num2
}
var CombineAges = combine(30, 28, 'as-number');
console.log(CombineAges);
var CombineStringAges = combine('30', '28', 'as-number');
console.log(CombineStringAges);
var CombineNames = combine("Alice", "Britt", 'as-text');
console.log(CombineNames);
// Literal types:
// Basing on the example above, literal types are types which are based on the core types
// but then one has a specific version. In the case below, strings.
function combined(inputA, inputB, resultConversion) {
    var results;
    if (typeof inputA === 'number' && typeof inputB === 'number' || resultConversion === 'as-number') {
        results = +inputA + +inputB; // +variable converts the respective variable to a number
    }
    else {
        results = inputA.toString() + inputB.toString();
    }
    return results;
    // return num1 + num2
}
