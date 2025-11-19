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
for (let i=0; i<50; i++) {
  if (i % 2 !== 0) continue
  console.log(i)
}