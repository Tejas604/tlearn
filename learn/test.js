// "use strict";  // use the code as new  js syntax

// console.log("tejas");
// const accountID = 12 ;
// let name = 'star';
// var lname = 'lord';

// console.table([accountID,name,lname]);
// // datatype
// //number
// /// null standalone value 
// /// undefined  the value has notassigned
// // symbol => unique mostly used in react

// ///object

// console.log( typeof name);

let mysymbol = Symbol('Key1');
let myobj = {
    name: "Shaharyar Ansari",
    id: 1232,
    [mysymbol] : mysymbol
}
console.log( myobj[mysymbol]);
console.log(typeof myobj[mysymbol]);
