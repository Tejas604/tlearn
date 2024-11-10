// immediately invoked function expression.

(function chai () {                          /////// this is called named iifee
    console.log(`chai is ready`)

})(); 


((name)=> {               /// this is called simple iffee
    console.log(`coffee is ready to serve  to ${name}`)
})("tejas")
 
// let chaii = () => (console.log(`chai is ready and hot`))

// console.log(chaii())

// syntax of iffee
// () ();
 // first bracket we write the function second is one as if we are calling  that method or function  
/// here the semi colon is important in iffe due to sometime iife does not know when to end it so the semi colon show that
 

// why do we need the iffeee or why do we use it
 // we use iffe just  it is  a function that get invoke immediately but this is not sufficent for interview
 // we could say that it is fuction that use some time due to the gloabl scope variable pollution just to reduce that pollution we use iffe
