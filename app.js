// Types: Numbers, Boolean and String
function add(num1, num2, showResult, phrase) {
    var results = num1 + num2;
    if (showResult) {
        console.log(phrase + results);
    }
    else {
        return results;
    }
    // return num1 + num2
}
var num1 = 5;
var num2 = 4.9;
var show = "The result is: ";
var printRes = true;
add(num1, num2, printRes, show);
