// falsy value
// false , 0, -0 , " ", BigInt 0N ,NULL , NAN, UNDEFINED

/// TRUTHY VALUE
// ANYTHING INSIDE THE STRING  " 0", "FALSE", "-0", empty array [], empty object {},  function(){} empty function

// if("0"){
//     console.log("done")
// }


// how to check if the object is empty or not
//  const emptyobj = {}
 
//  if(Object.keys(emptyobj).length === 0){
//     console.log("object is empty")
//  }


// nullish coalescing operator (??) :: undefined or for null value

let val1;
// val1 = 5 ?? 10

val1 = undefined ?? 5
console.log(val1)


// ternairy operator

// condition ? true : false

const bookprice = 100 

bookprice>80 ? console.log("more than 80"): console.log(`less than 80`)