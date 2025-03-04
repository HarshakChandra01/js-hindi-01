// Scope

// let a = 10
// const b = 20
// var c = 30
// curly brases is the scope
// let a = 300//value of a is independent of function below
// if(true){
//     let a = 10
//     const b = 20
//     var c = 30// we must avoid var
//     c=30
//     console.log("INNER: ",a);//block scope
// }

// console.log(a);//a is not defined(Global scope)
// //console.log(b);//b is not available
// // console.log(c);// 30 will printed var work outside scope

// // outside of scope the value of a will remain 300


// // Nested scope working
// function one(){
//     const username = "Harsh"

//     function two(){
//         const website = "Youtube"
//         console.log(username);//can access the elder
//     }
//     // console.log(website);//cant access from the child
    
//      two()//execution
    
// }

// one()

// Scope in if and else
if(true){
    const username = "Harsh"
    if (username === "Harsh"){
        const website = " youtube"
        // console.log(username + website); 
    }
    //console.log(website);cant asses from child
    
}
// console.log(username);

//   ++++++++++++++++++ Interesting ++++++++++++++++++++

// function addone(num){
//     return num+1
// }
// addone(5)//value will be return but not printed

console.log(addone(50));//statement will be printed 
// even if the function is written after log

function addone(num){
    return num+1
}
 

// expression
// fuction declayering and hold it inside a variable
// const addTwo = function(num){
//     return num+2
// }

// addTwo(5)


addTwo(5)//it will through the error
const addTwo = function(num){
    return num+2
}





