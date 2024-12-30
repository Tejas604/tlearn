// for loop

// for(let i = 0; i < 10; i++){
//     const element = i;
//     console.log(element)
// }

// for( let i =0; i < 10; i++) {
//     const eleme =i
        
//     if (i == 5) {
//         console.log("5 is the best number")
        
//     }
    
// }
// const message = 'Hello world' // Try edit me


// let i = 0;
// while(i<10 ){
//   console.log(`value of ${i}`)
//   i = i+2

// }
//  let arr =  [1,2,3,4,5]
//////////////////////////////////////// for of loop cab be applicable to every datatype except  object
// for (const i of arr) {
//   console.log(arr);
// }

// const gerts = "hello world";
//  for (const g of gerts) {
//   console.log(g);
//  }

// const map = new Map();
// map.set('tejas', 'ingole')
// map.set('star',' is born')
// map.set('pokemon', ' gotch catchem all')
// console.log(map)

// for (const [key , value] of map) {
//   console.log([key],":-" ,[value] );
// }


// const myobj = new Object();
//  myobj.name = " tejas";
//  myobj.age = " 22";
//  console.log(myobj)


 // for in loop use to iterate through the object

const myobject = {
    js : "javascript",
    cpp : "c++",
    py: " python", 
    rb : "ruby"
    
}
 for (const key in myobject) {
   
        // console.log(key) this only give out the keys
        //  console.log(`${key} is shortcut for ${myobject[key]}`);
 }

         //// difference between key and  value is only that in for of it prints out directly value you  and in for in you have to type the object name then [key] then you will get the value f
         // for example 
         

          const myprogramming = ["js", "c++", "java", "python"]
          
        //  for (const key in myprogramming ) {
           
        //        console.log(key)

        //     console.log(`above output give out the key only`)

        //     console.log(myprogramming[key])
                
        //     }
         

    /// for each


    // myprogramming.forEach(function (val){
    //     console.log(val)
    // })
    
 
    
    // myprogramming.forEach( (val)=>{
    //     console.log(val)
    // })

    myprogramming.forEach( (val, index , arr)=>{
            // console.log(val, index , arr)
         })

/// now this where the for each loop comes in clutch see when accessing data from database it always comes in the format of array within object just like below figure


const programming = [{
    programminglanguage : "java",
    shortcut : "java"
}, {
    programminglanguage : "python",
    shortcut : "py"
},
{
    programminglanguage : "c++",
    shortcut : "cpp"
}]

programming.forEach((item)=>{
    //console.log(item)

    console.log(item.shortcut);
    console.log(item.programminglanguage);
    
})