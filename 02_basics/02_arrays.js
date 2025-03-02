const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)//push inside the array not merge properly
// console.log(marvel_heros);//we gett array with in array having square brackets

// const allHeros = marvel_heros.concat(dc_heros)//explian it(concat us a new array)
// console.log(allHeros);//arrays are merge properly

// const all_new_heros = [...marvel_heros, ...dc_heros]
// //Any no of arrays canbe merged
// console.log(all_new_heros);//both ARRAY ar emerge in one

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);//all values are spread out in the array

console.log(Array.isArray('Harshak'));//not an array false
console.log(Array.from('Harshak'));//every valse inside it is converted into array
console.log(Array.from({name: "Harshak"}));//Interview
//we will get the emptyy array/we ahve to tell it to make the array with key

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// abobe score values are merged in side the array
// Interview read more about the isArray,from,of
// further we got to know about the arrays in projects
