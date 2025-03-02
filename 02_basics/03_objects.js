//  singleton(But this is object literal)
// Object.create
// when we made a constructor
// when we declare as literals then singleton is not made
// object literals
// symbol is a unique datatype
const mySym = Symbol("key1")
// Interview how to use symbol as the key of the object

const JsUser = {
    name: "Harshak",//name is considered as string in system
    //mySym: "mykey1",//it is not used as symbol inside object
    [mySym]: "mykey2",//This is syntax for symbol
    // [Symbol(key1)]: 'mykey2'
    age: 18,
    location: "Jaipur",
    email:"Hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);//given in form of string(Key)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);//no string is needed in case of symbol
// console.log(typeof JsUser.mySym);//string is printed not symbol

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"//This will not propagated as it is already freezed
// console.log(JsUser);//printing complete project

// functions can be treated as variables in js
JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting);//reference of function came
console.log(JsUser.greeting());//it is not a function because we freeze jsuser
// Hello Js user is printed
// undefined where does it came from

JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);//string interpolatio
}
// this for referncing same object
console.log(JsUser.greeting2());





 
// Interview how to use symbol as the key of the object

