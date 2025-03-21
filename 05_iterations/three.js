// for of loops of arrays

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
//dont confuse below object with javascript object
for (const num of arr) {//here object(arr and string) is used for broder perspective
    // console.log(num);
}

const greetings = "Hello World!"
for(const greet of greetings){
    if (greet==' ') {
        continue;
    }
    console.log(`Each cahr is ${greet}`);
}//each word of string will be printed one by one

// Maps