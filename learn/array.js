
// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
//// slice function does not modify the orginal array  but the  splice modify the orginal array
/// imagine array = [0,1,2,3,4,5,6] you use slice  myArr.slice(1, 3) output would be   [1,2 ] and og array would be same [0,1,2,3,4,5,6]
/// now for same array you used splice(1,3)  output would be [1 2 3] but the orginal array would be [0 4 5 6] so it modifies the array








const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  /// this called spread operator is way to combine array into one

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //. now this complex sitution where you have to merege array into array so use flat basically it store element into a single one
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) /// this is to check if the given value is array or not 
console.log(Array.from("Hitesh")) // this how you can convert anything into array  using the .from keyword
console.log(Array.from({name: "hitesh"})) // interesting now this will return  [] empty array cuz it not what to take as array to take the value or the key

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  /// .of is the keyword to return anything into array it basically create a new array