const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
// this help us to find out the current context
// user.welcomeMessage()
// user.username = "sam"//current context got changed
// user.welcomeMessage()
console.log(this);// window object is global object inside the browser

// function chai(){
//     let username = "hitesh"
//     // console.log(this);
//     console.log(this.username);  //undefined ??
// }

// const chai = function (){
//     let username = "hitesh"
//     // console.log(this);
//     console.log(this.username);  //undefined ??
// }

// chai()

// Way of declayering function using arrow function

const chai = () => {
    let username = "hitesh"
    // console.log(this.username);   //here also we get undefined
    console.log(this); //we will get the empty paranthesis 
    
}

chai()

// () => {} //basic way of declayerign arrow function
// declayering inside a variable

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) =>  num1 + num2 //we dont need return function as the code of one line
// const addTwo = (num1, num2) => (num1 + num2)//in parenthesis we dont need return statement
// const addTwo = (num1, num2) =>  { return num1 + num2}
const addTwo = (num1, num2) =>  ({username: "hitesh"})
console.log(addTwo(3, 4));

const myArray = [2, 5, 3, 7, 8]
myArray.forEach(() => {})


