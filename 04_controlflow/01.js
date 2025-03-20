// // if condition
// const balance = 900

// // if (balance > 500) console.log("test");
// if (balance < 500){
//     console.log("less than 500");   
// }else if (balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
    
// }

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if(userloggedIn && debitCard){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}


