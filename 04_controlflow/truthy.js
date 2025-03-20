// const userEmail = "h@hitesh.ai"
const userEmail = []

if(userEmail){//above string is assumed as true as no condition given
    console.log("Got user email");
}else{
    console.log("Dont have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
//  "0", 'false', " ", [], {}, function(){}

if( userEmail.length === 0){//checking the array is empty or not
    console.log("Array is empty");
}

// checking whether object is empty or not

const emptyObj = {}

if( Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// false == 0
// truetrue
// false == ''
// true
// 0 == ''

// Nullish Coalescing Operator (??): null undefined how does nco work in database
let val1;
// val1=5 ?? 10
// NCO check the safety of the value
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20//first value will be assigned



// console.log(val1);

// Terniary Operator different from NCO
// we can check the condition using ternary operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");





