
var arr = [1,2,3,4];

// arr.forEach(function(val){
//     console.log(val + "2" + " hello")
// })

// val is i in c++ helpus to iterate over the  array


//map

// var ans = arr.map((val) => {
//     // return 13;

//     return val * 2
// })
// console.log(ans);

/// filter
//  so what does the filter and map does is create a new array and return that new array when requiered


// const ans =  arr.filter((val)=>{
//    if(val >= 3) {return val}
//    else return  false;
// })

// console.log(ans);

/// find
// this help to find out that element exist in arr or nor


// const ans = arr.find((val)=> {
//     if(val=== 2 ){
//         return true
//     }
// })

// console.log(ans);



/// index of 
/// this is used to find the index of element in that  given array

// console.log(
//  arr.indexOf(3));

// object
// key value pair
var obj = {
    name: "tejas",
    age: 18,
}
// console.log(obj.name);
// obj['name'];

/// to freeze the so that the ibject value does not change we have a function

// Object.freeze(obj)

// so even if some declare or try to change the obj value it will throw the error

// obj.age = 25;



// so we can evee find the function length since function is object at  the core 
// to find the length function name.length same how we use to find for array