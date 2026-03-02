// singleton

// object literals
const mySym= Symbol("key1")
const JsUser={
    name: "Yahya",
    age: 20,
    [mySym]: "mykey1",
    location: "Kanpur",
    email: "yahya@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturrday"]
}
// console.log(JsUser.email);
// console.log(JsUser["name"]);
// console.log(JsUser[mySym]);


JsUser.email= "yahya@microsoft"
// Object.freeze(JsUser)
JsUser.email="yahya@chatgpt"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

// console.log(JsUser.greeting)

// +++++++++++++++++++++++

// const tinderUser = new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="yahya"
tinderUser.isLoggedIn=false

// console.log(tinderUser)
const regularUser ={
    email: "sam@gmail.com",
    fullname:{
        userfullname:{
            firstname:"yahya",
        lastname:"naseem"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);
// optional chaning
// console.log(regularUser.fullname?.userfullname.lastname);

const obj1={1: "a", 2: "b"}
const obj2={3: "a", 4: "b"}
const obj4={5: "a", 6: "b"
}
// const obj3={ obj1, obj2}
// const obj3= Object.assign({},obj1, obj2, obj4)
const obj3={...obj1, ...obj2}
// console.log(obj3);

const users=[
    {
     id:1,
     email: "yahya@gmail.com"  
    },
     {
     id:1,
     email: "yahya@gmail.com"  
    },
     {
     id:1,
     email: "yahya@gmail.com"  
    },
]
users[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course={
    coursename: "Js in hindi",
    price: "888",
    courseInstructor: "yahya"
}

// course.courseInstructor

const {courseInstructor: instruct}= course

// console.log(courseInstructor)
console.log(instruct);

const navbar = (company) =>{

}
navbar(company= "yahya")

// +++++++API+++++++
// {
//     "name" : "yahya",
//     "coursename" : "js in hindi",
//     "price": "free"
// }
[
    {},
    {},
    {}
]

