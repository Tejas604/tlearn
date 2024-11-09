// let arr = 1
//  if(true){
//      let arr = 2;
//      console.log(arr + " this is inside  the block scope"); /// inside the block scope anything under the curly bracket are inside the block scope
//  }

//  console.log(arr); // outside the block scope 


 /// nesteed function scope 


//  function one(){
//     const username = "tejas"
//     function two (){
//         console.log(username)          //// functyion that help us to access that outside  it is called as closure it will be explained more
//         const website = "youtube"               
   //  }
    // console.log(website) we can't access
//     two()
//  }
 

//  if(true){
//     const username = "name";
    
//  }
 

// let a = 4
//  a = 5;
//  console.log(a);
//  a = a+b
//  b =  a-b swapping logic for integer array only
//  a = a-b





//  const result = (function(a, b) {
//    const sum = a + b;
//    return sum;
// })(3, 4);
// console.log(result); // 7


// /// Anonymous Function
// You can optionally exclude the name of the function after the function keyword.

// var f = function(a, b) {
//     const sum = a + b;
//     return sum;
// }
// console.log(f(3, 4)); // 7
// Immediately Invoked Function Expression (IIFE)
// You can create a function and immediately execute it in Javascript.

// const res = (function(a, b) {
//     const sum = a + b;
//     return sum;
// })(3, 4);
// console.log(res); // 7
//Why would you write code like this? 
//It gives you the opportunity to encapsulate a variable within a new scope. 
// For example, another developer can immediately see that sum can't be used anywhere outside the function body.












// if(true){
//    const username = "Tejas";
//     if(username === "Tejas" ){
//       const website = "youtube"
//       console.log(website + username); this is jus to make you understand the scope logic for closure
       
//     }
//     console.log(website)
// }
// console.log(username);


function addnum (num){
 return num + 1;
}

console.log(addnum(5));

///another way to declare the  function in java script is

let two = function(nums){
   return nums + 3
}
console.log(two(4))