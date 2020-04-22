// UNION TYPES
// This gives flexibility when a function nedds to accept various types
// e.g. numbers, strings, booleans e.t.c
function combine(input1, input2) {
    var results;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        results = input1 + input2;
    }
    else {
        results = input1.toString() + input2.toString();
    }
    return results;
    // return num1 + num2
}
var CombineAges = combine(30, 28);
console.log(CombineAges);
var CombineNames = combine("Alice", "Britt");
console.log(CombineNames);
