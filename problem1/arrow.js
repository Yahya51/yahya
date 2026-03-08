const user={
    username: "yahya",
    id: 999,

    welcomeMessage: function(){
        // console.log(`${this.username}, this.welcome to website`);
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// function chai(){
//     console.log(this);
    
// }
// chai()

// const chai = ()=>{
//     let username="yahya"
//     console.log(this);
    
// }
// chai()

// const addTwo= (num1, num2)=>{
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "yahya"})

console.log(addTwo(3,5));

// const myArr = [2,5,6,8]

// myArr.forEach(()=>)
