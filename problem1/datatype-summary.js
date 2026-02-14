// Primitive

// 7 types: String , Boolean , Number, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue= 100.2

const isLoggedIn= false
const outsideTemp=null 
let userEmail;

const id= Symbol('123')
const anotherId=Symbol('123')

console.log(id=== anotherId)

const bigNumber=12344n



// Reference (Non Primitive)

// Array, Object, Function

const heros=["Ironman", "Spiderman","Batman", "Superman"]
let myObj={
    name:"yahya",
    age: "31",
}
const myFunction= function(){
    // console.log("Hello World")
}

// console.log(typeof myObj)// bigNumber,myFunction
// ++++++++++++++++++++

// stack(Primitive)
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

// heap(non-Primitive)
let obj1 = { name: "Yahya" };
let obj2 = obj1;

obj2.name = "Ali";

console.log(obj1.name); // Ali
