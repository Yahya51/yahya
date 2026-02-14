const name="yahya"
const repCount=50

// console.log(name + repCount + "Vlaue");
// console.log(`Hello my name is ${name} and my rep COunt is ${repCount}`);

const gameName = new String ('yahya')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length); 
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));
const newString=gameName.substring(0,3);
// console.log(newString)

const anotherString=gameName.slice(-5,-3)
// console.log(anotherString);

const newStringOne="  yahya  "
// console.log(newStringOne);
// console.log(newStringOne.trim());
const url="http://yahya.com/yahya%23naseem"
// console.log(url.replace('%23', '-'))

// console.log(url.includes('yahya'))
// console.log(gameName.split(','))
const myString = "Every green bus drives fast.";

// Using length property and charAt() method
const lengthWay = myString.charAt(myString.length - 2);
console.log(lengthWay); // 't'

// Using slice() method
const sliceWay = myString.slice(-2, -1);
console.log(sliceWay); // 't'

// Using at() method
const atWay = myString.at(-2);
console.log(atWay); // 't'