// singleton object
// const tinderUser = new Object(); 
// non singleton
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false //values inserted inside an object

console.log(tinderUser);

// object inside object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
           firstname: "hitesh",
           lastname: "choudhary" 
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

// Merging and combining objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1 , obj2}
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({}, obj1, obj2, obj4)//explin this syntax
// //{} = Target , obj1,2,4 = source
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// explain all imp syntax of objects

const obj3 = {...obj1, ...obj2}
console.log(obj3);

// when value came from the databse comes in the form of array of object

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {  
    },
    {

    },
]

users[1].email//dot notation can be used as it is an object
console.log(tinderUser)

// Methods of object
console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
// output came in form of array

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// checking property
console.log(tinderUser.hasOwnProperty('isLoggedIn'))




