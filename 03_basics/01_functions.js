// functions and memory management in JS
// pakaging a 10 or 20 line code and use its copy whereever we want

function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    
}

// sayMyName()//() after function defination is execution
// sayMyName it is a reference

// function addTwoNumbers(num1, num2){//we dont need to give the type of num in js
//     console.log(num1 + num2);
//     // (num1, num2) these are parameters inside function
// }

// addTwoNumbers()//nothing will be printed as we dont give argument
// addTwoNumbers(3, 4)//we dont need to give number
// addTwoNumbers(3, "4")//string 34 will be printed
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)//we dont check how to add in function

// explain parameter and argruments inside function

// function addTwoNumbers(num1, num2){
//     // let result = num1 + num2
//     // // console.log("Harsh");//will print
//     // return result//after return function will not work
//     // console.log("Harsh");
//     // Or
//     return num1 + num2
    
// }
// function addTwoNumbers(num1, num2){
//     return num1 + num2
// }

// const result = addTwoNumbers(3,5)
// console.log("Result: ", result);//undefined answer

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter the username");
//         return //after this aage the execute nahi hoga
//     }
//     return `${username} just logged in`//${} is
// }

// loginUserMessage("harsh")//nothing will be printed as u dont tell about printing
// console.log(loginUserMessage("harsh"));//this is how parameter are taken
// console.log(loginUserMessage(""));//just logged in
// console.log(loginUserMessage());//undefind just logged in

// if aise statement

// how parameters are taken

function loginUserMessage(username = "sam"){//givining default values
    if(!username){//as default value is here so it will not executed
        console.log("Please enter the username");
        return //after this aage the execute nahi hoga
    }
    return `${username} just logged in`//${} is
}

console.log(loginUserMessage());
console.log(loginUserMessage("Harsh"));//override of sam
