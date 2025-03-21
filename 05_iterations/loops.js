// for

for (let i = 0; i <= 10; i++) {
    const element =  i;
    if(element == 5){
        // console.log("5 is best number");
    }
    // console.log(element); 
}

// console.logelement();
//as element is declayred outside scope so their will be no access out side scope

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
       // console.log(`Inner loop value ${j} and inner loop ${i}`);  
    //    console.log(i + '*' + ' = ' + i*j);
        
    } 
}

let MyArray = ["flash", "batman", "superman"]
// console.log(MyArray.length);
for (let index = 0; index < MyArray.length; index++) {//<= undefined
    const element = MyArray[index]; 
    // console.log(element);
      
}

// break and continue keywords

// for (let index = 0; index <=20; index++) {
//     if (index==5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);
// }
for (let index = 0; index <=20; index++) {
    if (index==5) {
        // console.log(`Detected 5`);
        continue;//index 5 will be skipped
    }
    // console.log(`Value of i is ${index}`);
}



