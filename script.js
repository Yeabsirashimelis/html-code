// console.log("I love JS")
//VARIABLES - var, let, const
// let number = 1;
// let name = "abebe"
// let boolean = true 
// let pi = 3.14



// let number3;
// number = 7;
// const number2 = 6;

// let var1 = 2
//  var1 = "javascript"
//  var1=false
//  console.log(var1)

 /*
 var- function scoped
 let, const - block scoped

 */

// function x () {
//     if (true) {
//         var var1 = 5;
//         console.log(var1)
//     }
//     console.log(var1)

//     if (true) {
//         let var1 = 5;
//         console.log(var1)
//     }
// }


// x()

/*
 let - use only if the value changes
 const - cannot be updated or redeclared
*/

// Javascript is dynamically typed
/*
primitive
  STRING,
  NUMBER,
  BOOLEAN,
  UNDEFINED,
  NULL,
  BIGINT
*/

/*
reference datatype / derived
 array, object, function
*/
// let number = 123;
// let array = [23, 34, 67,]
// let obj1 = {
//     name:"yeabsira",
//     field:"CS major",

// }

// console.log(array)
// console.log(obj1)

// TYPE COERTION AND TYPE CHECKING
/*
  type coertion = js automatically converts types when needed
*/
// console.log(5 + "5") // 55 - string
// console.log("10" - 3) // 7 - number
// console.log(true + 1) // 2 - number
// console.log(1 + false) // 2 - number

// type checking  - a mechanism to check the type of your variables

// console.log(typeof 42)
// console.log(typeof "hello")
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof 54.6)
// console.log(typeof 5497996723649236438264328643644364374637643n)

// console.log("5" * "2")
// console.log("5" + 2)
// console.log(null + 1)
// console.log(undefined + 1)

// let x; 
// console.log(x + 10)

/*
arithmetic operators
  +, -, *, /, %, **
*/

// console.log(11%4)
// console.log(3**2)
// console.log(4/2)

/*
   comparison operators - gives us boolean value.

   ==(equal - loose), === (equal - strict), != - loose !== - strict, >, <, >=, <=
*/

// console.log("5" == 5)
// console.log("5" === 5)

// console.log("5" != 5)
// console.log("5" !== 5)

/*
  logical operators
  and - &&, or - ||
*/


// let age = 20;
// let hasId = true;

// if (age >= 18 && hasId) {
//   console.log("allowed to enter")
// } else {
//   console.log("get the fuck out of here")
// }

//conditional statement
//  1, if/else 

//   let score = 98

//   //CODE1
//   if (score >= 90) {
//     console.log("A")
//   } else if (score >= 75) {
//     console.log("B")
//   } else {
//     console.log("C")
//   }

//   // CODE 2
//  if (score >= 90) {
//     console.log("A")
//   } 

//   if (score >= 75) {
//     console.log("B")
//   } 

//   if (score < 75)
//   {
//     console.log("C")
//   }


  // 2, switch

  // let day = 1

  // switch (day){
  //   case 1: 
  //     console.log("Monday")
  //     break;
  //   case 2: 
  //     console.log("Tuesday")
  //     break;
  //   case 3:
  //     console.log("Wednesday")
  //     break;
  //   default: 
  //     console.log("unkown day")
    
  // }

  // 3, Ternary operator
  //    condtion ? value_if_true: value_if_false

  // let age = 17

  // if (age >=18) {
  //   console.log("yes")
  // } else {
  //   console.log("no")
  // }

  // let canvote = age >= 18 ? "Yes" : "no"
  // console.log(canvote)

  // age >= 18 ? console.log("Yes") : console.log("no")


  // let isDark = true;
  // console.log(isDark ? "Dark Mode" : "Light Mode")

  /*
     Loops - repeat code multiple times

     for, while, do while
  */

    //  for (let i = 0; i < 5; i++) {
    //   console.log("HI")
    //  }

    //  for loop
// for (let i = 5; i > 0; i--) {
//       console.log("HI")
//      }

// while loop
  // let i = 0
  // while(i < 5) {
  //     console.log("HI")
  //     // i++ i= i+1
  //     i++
  // }

// do while 
  // let i = 0

  // // while(false) {
  // //   console.log("yeahhhhhhhhhhhhhhhhhhhhh")
  // // }

  // do {
  //   console.log("yeahhhhhhhhhhhhhhhhhhhhh")

  // } while(false)

// do {
//    console.log(i)
//       // i++ i= i+1
//       i++
// } while(i < 5)

// let nums = [1, 2, 3, 4, 5]
// for (let i=0; i< 5; i++) {
//  console.log(nums[i])
// }

// // it is a for loop type in which we use for arrays
// for (let num of nums) {
//   console.log(num)
// }

// it is a for loop type in which we use for objects

// let user = {name:"abebe", age:50}
// for (let key in user) {
//   console.log(user[key])
// }

// BREAK AND CONTINUE
// break - to stop iteration
// for (let i=0; i< 10; i++) {
//   if (i == 5) break;
//   console.log(i)
// }

// continue - skip iteration
// for (let i=0; i<50; i++) {
//   if (i % 2 !== 0) continue
//   console.log(i)
// }

// FUNCTIONS - A reusable block of code that performs a specific task.
    /*
           avoid repeating code - dont repeat your self
           organize logic into pieces
           easier debugging
           resuable and modular
           NECCESARY FOR LARGE APPLICATIONS
           
    */

  // function funtionName() {
  //   //code
  // }

  // functionnName()

  function sayHello () {
    console.log("Hello Guys")
    console.log("Hello Gentlemen")
    console.log("Hello Ladies")

  }

  // sayHello()
  // sayHello()
  // sayHello()

  //1, function declaration - can be hoisted
// function greet() {

// }

// function calculateArea(width, height ) {
//   const area = width * height
//   console.log("Area = " + area)
// }

// calculateArea(10, 5)

// declarations are hoisted
// greet()

// function greet() {
//   console.log("HI")
// }


// 2, function expression - cannot be hoisted
//  const greet = function () {
//   console.log("HI")
//  }

//  greet()

//  3, arrow function
/*
   use cases
     - short utility codes
     - callback functions

    avoid when
     - mehods in objects / need "this"
     - constructors
*/
// function add(a, b) {
//   return a+b
// }
// const add = (a,b) => a+b

// const result = add(3,4)
// console.log(result)

// parameters and arguments
// parameters - placeholder
// argument - actual values

//  function greet(name) {
//   //code
//  }

//  greet("Lily")

//  function fullName(first, last) {
//   console.log(first + ' ' + last)
//  }

//  fullName("Abebe", "Kebede")

// DEFAULT PARAMETER

// function register(role = "student") {
//   console.log("Registered as ", role)
// }

// register();
// register("teacher")

// Rest parameters
//  function sum(num1, num2, ...numbers) {
//   console.log(numbers)
//   numbers[3]
//   numbers[4]
//  }

//  sum(1, 2, 3, 4, 5, 9, 8)

// return statement - to return a value - primitives, derived, other functions, to stop execution
// function multiple(a,b) {
//   return a * b
// }

// const result = multiple(4, 5)
// console.log(result)
// console.log(multiple(4, 5))

// function check_age(age) {
//   // if (age < 18) return
//   if (age < 0) {
//     console.log("please enter correct age")
//     return
//   }

//   console.log("legal to elect")
// }

// check_age(20)
// check_age(17)
// check_age(-10)

// function makeMultiplier(x) { // higher order function
//   return function(num) {
//     return num * x
//   }
// }

// const triple = makeMultiplier(3)
// const double = makeMultiplier(2)

// console.log(triple(5))
// console.log(triple(6))
// console.log(double(4))
// console.log(double(7))


// SCOPE - defines where variables are accesible
  // SCOPE = BLOCK = {}
  // SCOPE - GLOBAL, LOCAL
  // let appname = "Inventory system"
  // function abc() {
  // let appname2 = "Inventory system"
  // }

  // console.log(appname2) - runtime error

  // function countVowels(str) {
  //   let count = 0;
  //   const vawels = "aeiou"

  //   for (let i =0; i < str.length; i++) {
  //     if (vawels.includes(str[i]) ) {
  //       count++
  //     }
  //   }

  //   return count

  // }

  // const result = countVowels("Yohannes");
  // console.log(result)

 // // ARRAYS - to store multiple values in one variable
  // let fruits = ["apple", "banana", "orange"]

  // let cars = new Array("Toyota", "BMW", "Honda")

  // // mixed data is allowed
  // let mixed = ["john", 25, true, null, 'y', ["wre", "oi"], 0, "yeabsira"]
  // console.log(mixed)

  // // accesing and updating elements
  // console.log(mixed[0])
  // mixed[1] = "abebe"
  // mixed[3]=100
  // console.log(mixed)

  // console.log(mixed.length)
  // console.log(mixed[mixed.length - 1])

  // ARRAY METHODS
  // 1, push - to push elements into the array to the end
//   let names = ["abebe"];
//   names.push("sami")
//   names.push(3)
//   names.push('u')
//   names.push(true)
//   names.push([1, 2, 3])
//   names.push(null)

//   console.log(names)

//   // 2, pop - remove from end
//   names.pop()
//   names.pop()
//   console.log(names)

//   // 3, unshift - add to start
//   names.unshift(100)
//   names.unshift("hey")

//   // 4, shift - remove from start
//   names.shift();
//   console.log(names)

//   // 5, slice - copy portion (no change to the original)
//   // names.slice(starting_index, ending_index)
//  let copied =  names.slice(1, 4)
//   console.log(copied)
//   console.log(names)

//   // 6, splice - add/remove items (modifies original)
//   names.splice(1,0)
//   console.log(names)


// iteration methods  - accept anonymous callback functions
//  1, forEach - loop through each item. does not return anything
// let nums = [1,2,3,4]

// nums.forEach(function(n){
//   console.log(n * 2)
// })

// // 2, map - create a new transformed array, returns a value
// let x = nums.map((n)=>n*2)
  
// console.log(x)

// // 3, filter - keep items that meet condition, returns a value
// let ages = [12, 20, 17, 30, 25]
//  let adult = ages.filter((age) => age >= 18)
//  console.log(adult)

// //  reduce - reduce array into a single value
// let nums2 = [1,2,3,4,5,3];
// let sum = nums2.reduce((total, n)=> total + n, 0)
// console.log(sum)

// // 4, find - returns first match
// let result = nums2.find(function(n) {
//  return  n == 5
// })
// console.log(result)

// ARRAY DISTRUCTURING
// let numbers = [10, 20, 30]
// let [a, b] = numbers
// // console.log(a, b)

// let [e,,f] = numbers //skip
// // console.log(e,f)

// // swap variables
// let x = 5;
// let y = 10;
// temp = x
//  x = y
//  y = temp
// [x, y] = [y, x]
// console.log(x)
// console.log(y)

// ES6
// 1. arrow function
// const add = (a, b) => {
//   // logic
//   return a + b
// }
  
// const square = x => x * x
// const sayHi = () => console.log("Hello")

// // arrow functions and lexical this
// const person = {
//   name: "Yeabsira",
//   sayHi: function () {
//     setTimeout(function() {
//       console.log("Hi " + this.name) // this refers the window
//     }, 1000)
//   }
// }

// person.sayHi()

// const person2 = {
//   name: "Yeabsira",
//   sayHi: function () {
//     setTimeout(() => {
//       console.log("Hi " + this.name) // this refers to the current object
//     }, 1000)
//   }
// }

// person2.sayHi()

// TEMPLATE LITERALS AND STRING METHODS
// const name2 = "Sara"
// console.log("Hello " + name2 + " welcome")

// console.log(`Hello ${name2} welcome`) //ES6 FEATURE

// const paragraph = `wrwwewqe wehewgroewr rwhoiw e whre oi
// oewippur oe ew
// `
// console.log(paragraph)

// console.log(`5 + 5 = ${5+5}`)

// // startsWith()
// const x = "hello".startsWith("he")
// console.log(x)

// // endsWith()
// "hello".endsWith("lo")

// // includes
// "banana".includes("nan")

// //repeat
// const y  = "ha".repeat(10);
// console.log(y)

// DEFAULT PARAMETERS
// function printName(name = "abebe"){
//   console.log(name)
// }

// printName()
// printName("Bisrat")

// // function greet(name = "Guest") {}
// function greet(name) {
//   name = name || "Guest"
//   console.log(name)
// }

// greet()
// greet("waiter")

// REST PARAMETERS
// function sum(...numbers) {
//   console.log(numbers)
// }

// sum(1,2,3,4,5, "eworiwe", 7.8, 'r')

// const colors = ["red", "green", "blue"]
// const [primary, scondary, tertiary] = colors
// console.log(primary)


// const user = {
//   age: 20,
//   name: "Liya",
//   country: "Ethiopia"
// }

// const name = "eqrewre"

// // renaming object key name while distructuring
// const {name: fullName, age: rtyui} = user;
// // console.log(name, age, iyoio)
// console.log(fullName)
// console.log(rtyui)

// import { addNumbers, PI } from "./script2.js";
// import abc from "./script2.js";

// console.log(PI)
// addNumbers(2, 3)
// // console.log(abc)



// CODING QUESTIONS
// Q1, find the largest of 2 numbers
// function largest(a, b) {
//   if(a > b) {
//       return a
//   } else {
//       return b;
//   }
// }

// console.log(largest(10, 20));

// // Q2, check if a number is even or odd
// function evenOrOdd(n) {
//   if(n % 2 === 0) 
//     return "even"

//    return "odd"  
// }

// // const x = num => num % 2 === 0 ?"even" :"odd"
// console.log(evenOrOdd(9))

// // Q3, sum of all numbers from 1 to N
// function sumToN(n) {
//   let sum = 0;
//   for (let i=1; i <= n; i++) {
//     sum = sum + i
//   }

//   return sum
// }

// console.log(sumToN(10))

// // Q4, count the number of vowles in a string
// function countVowels(str) { 
//   let count = 0;
//   let vowles = "aeiouAEIOU"

//   for(let char of str) {
//     if (vowles.includes(char)) {
//       // count++
//       count = count + 1
//     }
//   }

//   return count
// }

// console.log(countVowels("transformers"))

// // Q5, reverse the string
// function reverseString(str) {
//   let arr = str.split("")
//   let reversedArray = arr.reverse()
//   let reversedString = reversedArray.join("")

//   return reversedString
// }

// console.log(reverseString("abcd"))

// // Q6, find the factorial of a number
// function findFactorial(n) {
//   let factorial = 1;
//   for (let i=1; i<=n; i++) {
//     // factorial = factorial * i
//     factorial *= i
//   }

//   return factorial

// }

// console.log(findFactorial(10))

// // Q7, check if a string is a palindrome
// function isPalindrome(str) {
//  let reversed  =  reverseString(str)

// //  if (str === reversed) {
// //   return true
// //  } else {
// //   return false
// //  }

// return str === reversed
// }

// console.log(isPalindrome("mommy"))


// // Q8, count digits in a number
// function countDigits(n) {
//   let string = n.toString()
//   let length = string.length

//   return length
// }
// console.log(countDigits(134567))


// // Q9, find the smallest number in an array
// function smallest(arr) {
//   let min = arr[0]
//   for (let num of arr){
//     if (num < min) {
//       min = num
//     }
//   }

//   return min

// }

// console.log("min: ", smallest([3,1,4,2]))

// // Q10, find the largest number in an array
// function largest_number(arr) {
//   let max = arr[0]

//   for (let num of arr){
//     if (num > max) {
//       max = num
//     }
//   }

//   return max

// }
// console.log("max : ", largest_number([3,1,4,2]))

// DOM 
// window - represent the browser it self
// document - represent the webpage loaded inside the window

// window.alert("server crashes")
// console.log(window.location)
// console.log(window.scrollY)

// console.log(document)

// //selecting elements in the dom
// // document.getElementBYyId()
// const abc = document.getElementById("abc")
// // abc.textContent = 'def'
// // abc.style.color = "red"
// console.log(abc)

// // classname
// const heading = document.getElementsByClassName("heading")
// // console.log(heading[0])

// // querySelector - most used - the first match from css selector
// const x = document.querySelector(".heading")
// console.log(x)
// x.style.backgroundColor = "red"

// // querySelectorAll - most used

// abc.textContent= "red"

// const b = document.querySelector(".xyz")
// console.log(b)
// b.innerHTML = "<strong>Bold text</strong"

// const image = document.getElementById("photo")
// console.log(image)
// image.setAttribute("src", "/assets/img2.avif")

// const input = document.getElementById("input")
// input.setAttribute("type", "number")

//DOM MANIPULATION AND EVENTS
// creating elements
 