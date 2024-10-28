const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
//++++++++++++++++++++++++++maths++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// // console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));




// console.log(Math);
// console.log(Math.random());
// /// math.random gives value between 0 and 1 so we multiple it by 10 to get the value
// console.log(((Math.random())  * 10)  + 1 ); /// we do the plus one cuz we don't want the value to be zero 
// console.log(Math.floor((((Math.random())  * 10)  + 1 ))); 
// we use the floor function to get single value instead of decimal value run this you will understand what i am talking about


const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //// this the formula to genrate teh range we want the number to be in range example for dice game this formula is crucial












//// // Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})