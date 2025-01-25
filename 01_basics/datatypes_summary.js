// Call by value and call by reference

// Primitive datatypes => call vy value
// 7 types string refrence of original data is not given
//  we generally get the copy

// 7 types : String, Num, Boolean, null, undefined, symbol, BigInt
// symbol to make the value unique we genarally use the symbol

// Non primitive => call by reference
// Array, Objects 
// Master objects in javascript and Events in web browser
// JavaScript is a dynamically typed language. 
// This means that variable types are determined at runtime rather than at compile time. 
// You don't have to explicitly declare the type of a variable; instead, 
// JavaScript infers it based on the assigned value.
// let x = 10;   // x is a number
// x = "Hello";  // Now x is a string
// JavaScript is a loosely typed language => type script is used instead of this
// const score:number = 100

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail; //undefined

const id = Symbol('123')//different values
const anotherId = Symbol('123')//we get different values

// console.log(id === anotherId);

// const bigNumber = 464646464479394649479n

// Non primitive => call by reference
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
// Object the value which i present in curly braces
let myObj = {
    name: "harshak",
    age: 24,
}

// functions in javaScript can be treated as variable
const myFunction = function(){
    console.log("Hello world");   
}
console.log(typeof myFunction);//fuction object


// How to find datatype of some value

console.log(typeof bigNumber);
console.log(typeof outsideTemp);

// Undefined = "undefined"
// function = "function"
//  Null = "object" 
// Boolean = "boolean" 
// Number = "number" 
// String = "string" 
// Object(native and does not implement [[Call]]) = "object"
// Object(native or host and does implement [[Call]]) = "function"

 


