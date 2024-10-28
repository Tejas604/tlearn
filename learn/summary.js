// //  Primitive

// //  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt


// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)  usually its datatype is a object and for function it is also a objectfunctiom
// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



  /////////////////memeory//////////
   // stack(primitive) copy of the memory, heap(non-primitive) reference of the memeory

   let ob2 = myObj
   ob2.name = "tejas";
   console.log(myObj);
   
   console.log(ob2) ;