// Objects
var person = {
    name: "michael",
    age: 27
};
// Arrays
var me = {
    name: "michael",
    age: 27,
    hobbies: ["swimming", "travelling"]
};
console.log("the person is: ", me);
// Defining an arrray
var foodList; // This means that we'll be exxpecting an array of strings
// any[] refers to a scenario where the array can hold any data type
// Old JS
for (var _i = 0, _a = me.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
    //  console.log(hobby.map()) Returns an error since hobby is not an array
}
// Tuples
var team = {
    name: "tusker",
    location: "nairobi",
    players: [23, "fixed"]
};
//  push works with tuples but creating a totally new copy of tuple with more field results to an error. e.g:
// team.players = [4, "many", "others"] // This fails
console.log("the team is: ", team);
//  Enum
// This is used to assign LEBELS to NUMBERS. E.g. when creating user roles as shown below
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {})); // the roles are given indices automatically
var user = {
    name: "Mike",
    role: Role.ADMIN
};
if (user.role === Role.ADMIN) {
    console.log("the role is admin");
}
