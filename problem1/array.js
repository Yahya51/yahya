// array

const myArr = [0,1,2,3,4,5,]
const myHeros= ["ironman","batman"]
const myArr2= new Array(1, 2, 3, 4,)
// console.log(myArr[0])

// Array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop(4)

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(3));
const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// slice ,splice

// console.log("A", myArr);
const myn1 = myArr.slice(1, 3)
// console.log(myn1)
// console.log("B", myArr);
const myn2 = myArr.splice(1, 3)
// console.log(myn2);
// console.log("C", myArr);

// ++++++++++++++++++++++++++++++
const marvel_heros= ["thor","Ironman", "Spiderman"]
const dc_heros=["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
const allHeros=marvel_heros.concat(dc_heros);
// console.log(allHeros);
// console.log(marvel_heros[3])
 const all_new_heros= [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another =[1, 2, 3, [4 ,5 ,6 ], 7,[6, 7,[ 4, 5]]]
// console.log(another)

const real_another_array = another.flat(Infinity);
// console.log(real_another_array);
// Array=[1,2,3,]
// console.log(Array.isArray("yahya"))
// console.log(Array.from("yahya"))
// console.log(Array.from({name: "yahya"})) //interesting

let score =100
let score2= 200
let score3= 300

console.log(Array.of(score, score2, score3))