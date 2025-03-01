// array

const myArr = [0,1,2,3,4,5]//square brackets
// array is an object
// array are resizable in js
// mix, can be string, array with in array
// array are not associative, array element cant be accessed using arbitrary string
// console.log(myArr["one"]);this method dont work
// array copy operations create shallow copies(call by reference)
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)//no square bracket
console.log(myArr[1]);

// Array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()//last value in array is popped out
// myArr.unshift(9)//element inserted in starting of array
// myArr.shift()//element removed from starting
// console.log(myArr.includes(9));//false answer cames in boolean type
// console.log(myArr.indexOf(3));//3

const newArr = myArr.join()//converted to string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);//newArr is string

// interview slice(return a rection of array), splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);//last range is not printed[1,2]
console.log("B ", myArr);//original array remains the same after slice

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);//original array got change
console.log(myn2);//last range is also printed






