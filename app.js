"use strict";
// Unknown type: this is different from the any type. 
var userInput;
var userName;
userInput = 5;
userInput = "Data";
// userName = userInput // This results to an error since the two types conflict
if (typeof userInput === "string") {
    userName = userInput;
    // After checking the type, this is correct since the types now match 
}
// Never Type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("Bad request", 400);
// The function above does not return VOID it returns a NEVER
// Another function that never returns is a function with an endless loop
// e.g. while (true) {}
