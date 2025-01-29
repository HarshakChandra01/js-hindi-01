const gameName = new String('hiteshhc-sorry-iloveyou')

// console.log(gameName[0]);
// console.log(gameName.__proto__);//{}we get the empty object but the object is not empty

// console.log(gameName.length);//length can be accessed
// console.log(gameName.toUpperCase());//string converted to upper case original value is not change only copy is changed
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));
// // Study methods of string on mdn or chatgpt

// const newString = gameName.substring(0,4)//we will grt the value of 0,1,2,3 
// console.log(newString);//we dont get the value which is at index four// we dont give negative values in substring

// const anotherString = gameName.slice(-8,4)//can give negative values 
// //the string will start with reverse
// console.log(anotherString);
// // trinm and replace method is used further

// const newStringOne = "    hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());//trim space from the string

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));
console.log(url.includes('sunder'));
console.log(url.includes('hitesh'));

// Changing string into array
console.log(gameName.split('-'));
// The string was splited





 


