// //singleton+ it can be created using the constructor method only
// // not by literal method lets now learn how to create the object
// // how to declare symbol well in javascript it is super easy to declare anything
// // first we declare the variable name and then the datatype the value cover in circular brackets
// const sym = Symbol("mykey")
// // Object.create // this is one way to create a obj
// // this is object by literals method
//  // now it is empty but by putting some value in curly braces we can access the obj


//  const juser ={
//     name : "tejas",
//     "fullname" : "tejasingole",
//     [sym] : sym,
//     age : 22,
//     email : "test123@gmail.com",
//     location : "mumbai",
//     islogin : false,
//     lastlogin : ["mon", "tues", "wed"]

//  } // it always exist in key value pair so we can acess by giving the key

//  /// two ways to access the obj 
// //  console.log(juser.age);
// //  console.log(juser.email);
 
// // console.log(juser["fullname"]);
// // console.log(juser[sym]);
// // console.log(typeof juser[sym]);
// //  ////// change the value of the obj
// //  juser.email = "te123@gmail.com";
// //  console.log(juser.email);
// //  /// how to lock the object from making any changes we can do that by
// //  Object.freeze(juser);


// juser.greeting = function(){
//     console.log( "hello js user");
    
// }
// juser.greetingtwo = function(){
//     console.log(`hello jsuser, ${this.name}`)
// }
// console.log(juser.greeting());
// console.log(juser.greetingtwo());


const newprofile = new Object() ///// singleton

/// can declare multiple object inside object
const userprofile = {
    fullname : {
      firstname : {
         name : "tejas",
         lastname :"ingole"
      }
    }
}

userprofile.id = "1233abs";
userprofile.name = "tejs";
userprofile.email = "12@gmail";
// console.log(userprofile);
// console.log(userprofile.fullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2} /////// spread operator to combine two object 
// console.log(obj3);


// console.log(Object.keys(userprofile)); /// convert object to the array
// console.log(Object.values(userprofile));
// console.log(Object.entries(userprofile));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); if want to check if the property exist or not


// let learn how to destructure object it is
///++++++++++++++++ important often uses in react ////////////////

const course = {
    cousename : " new ",
    coursetutor : "goku",

}

// console.log(course.coursetutor);

const  {coursetutor : tut} = course
console.log(tut);

