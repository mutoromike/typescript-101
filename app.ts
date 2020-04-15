// Objects

const person = {
    name: "michael",
    age: 27
}


// Arrays

const me = {
    name: "michael",
    age: 27,
    hobbies: ["swimming", "travelling"]
}
console.log("the person is: ", me)

// Defining an arrray

let foodList: string[]; // This means that we'll be exxpecting an array of strings
// any[] refers to a scenario where the array can hold any data type

// Old JS
 for (const hobby of me.hobbies){
     console.log(hobby)
    //  console.log(hobby.map()) Returns an error since hobby is not an array
 }


 // Tuples

 const team: {
     name: string;
     location: string;
     players: [number, string] // Here we are telling TS that this is a TUPLE
 } = {
     name: "tusker",
     location: "nairobi",
     players: [23, "fixed"]
 }
//  push works with tuples but creating a totally new copy of tuple with more field results to an error. e.g:

// team.players = [4, "many", "others"] // This fails

 console.log("the team is: ", team)



//  Enum
// This is used to assign LEBELS to NUMBERS. E.g. when creating user roles as shown below

enum Role {ADMIN, READ_ONLY, AUTHOR} // the roles are given indices automatically
// If one needs different numbers then an equal sign comes in handy as shown below
// enum Role {ADMIN = 3, READ_ONLY = 7, AUTHOR = 5}

const user = {
    name: "Mike",
    role: Role.ADMIN
}

if (user.role === Role.ADMIN) {
    console.log("the role is admin")
}


// Any. Example below:
// This type should be avoided since can be error prone and might be difficult to troubleshoot
// Takes you back to the raw-JS environment-like

let anyArray: any[]