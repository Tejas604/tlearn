let name = "tejas"
 const cnt = 1

// for concatinate the string 
////  con.log( name + cnt + "haha");
// old way to do it  new way below called string interpoliation this way we can method to like if we want change name to upper case we can do use that toupper
console.log(`hell my name is ${name.toUpperCase()} and the  count is ${cnt}`);
const gameName = new String('hitesh-hc-com')


console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString = gameName.substring(0, 4)
console.log(newString);



const anotherString = gameName.slice(-8, 4)
console.log(anotherString); 
// this is for  if you want to get the element from the end -8 define the last element of the string in our case for name function is "s"
const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());
/// trim remove the extra space from the string use in when website is storing user email address or different
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))