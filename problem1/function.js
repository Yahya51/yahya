function sayHello(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
    console.log("Y");
}

// sayHello()

// function addTwoNumbers(number1, number2){
//    console.log( number1 + number2);
// }

function addTwoNumbers(number1, number2){
//    let result = number1 + number2
//    return result
return number1 + number2
   console.log("yahya");
   
   
}
// const result = addTwoNumbers(1,2)
// console.log("Result:", result);

function loginUserMessage(username = "sam"){
    if(!username){
      console.log("please enter a username")
      return 
    }
     return `${username}just logged in`
    }
// console.log(loginUserMessage("yahya")) 
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 700))
const user= {
    username: "yahya",
    price: 199
}
function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username:"naseem",
    price: 300
})

const myNewArray= [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));
