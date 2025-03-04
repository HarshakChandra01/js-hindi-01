//Functions with objects and array in javascript 

// function calculateCartPrice(num1){
//     return num1
// }
// function calculateCartPrice(...num1){
//     return num1
// }// we will get an array
function calculateCartPrice(val1, val2, ...num1){//interview what values(val1, val2) will go inside in num1
    return num1
}//[ 500 ] as 200 and 400 will go in val1 and val2

// console.log(calculateCartPrice(2))
console.log(calculateCartPrice(200, 400, 500))//differnt items are added to cart
// for passing differnt values we need rest/spred(...num1) opera

// objects paaing in fuction

const user = {
    username: "hitesh",
    price: 199 //prices undefined
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}` );
    
}

// handleObject(user)
// direct passing of object
handleObject({
    username: "sam",
    price: 399
})

// direct passing of array
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

