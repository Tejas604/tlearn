// this is  the keyword which refers  to the current context of the object

 const user = {
    username : "tejas",
    id : 5,
    message :  function(){
      console.log(`${this.username} welcome to my website`);
      console.log(this);
      
    }
 }

//  console.log(`${user.username} welcome to my website` )


//  user.message()
// //  user.username = "myname"
// //  console.log(user);
//  user.message()


//  console.log(this);

 // In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

  // hell0 = function {
  //   document.getElementById(that html tag).innerHTML += this  
  //   whatever is the context in this scope
  // }

  // function f() {
  //  let user0 = "this"
  //   console.log(this);
  // console.log(this.username); it comes as undefined  so we can,t use this key word inside the variable initialize function to access only in object
     
  // }
  //  function f (){
  //   let user0 = "sam"
  //   console.log(this.user0)
  //  }
  //  f()

  //  const shing  = function (){
  //    let username = "hit"
  //    console.log(this.username)
  //  }// undefined

  const shing  =  () => {                     // arrow function just remove the function from the add "=>"
    let username = "hit"
    console.log(this.username)
  }



  // let addtwonumber = (num1,num2)=> {
  //   return num1 + num2
  // }

  // console.log(addtwonumber(3,4));
  
  //  let twoadd = (num1, num2) => num1 + num2 ////////////// this is called implicit return wheret
  // console.log( twoadd(3,4))

  // let twoadd = (num1, num2) => ( num1 + num2) ////////////// if wrap the function inside "{}" the you have to use the return keyword  
  // // else if you use "()" then  no need mostly it is used in react 
  // console.log( twoadd(3,4))


// to return the object in the arrow function we have to wrap it up in curly brac else it will give undefined

 let  twerp = (num1,num2) =>  ( { username : "tejas"})  // this method
 console.log(twerp(3,4))


