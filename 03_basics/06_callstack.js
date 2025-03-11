// Javascript Execution Context
// Javascript run our program in two phases 
// 1. {} Global Exection/Environment context(it is stored in this variable) 
// 2.Function execution context 
// 3.Eval EC in Moongoose 

// 1.{} > Memory creation phase 
    // {} all variables are stored and put together undefined is put in them
// 2.Execution phase

let val1 = 10 //val1 > undefined 1st cycle
let val2 = 5  //val2 > undefined 1st cycle
function addNum(num1, num2){ //defination 1st cycle
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)//undefined 1st cycle
let result2 = addNum(10, 2)//undefined 1st cycle

console.log(result1); 
console.log(result2); 

// 2.Execution phase 
// val1 10, 
// val2 5,
// addNum will make its own execution context box will create in memory for function it will later deleted
//    New environment + execution thread  //  agai n memory phase and execution phse will start for addNum
//    //memory phase val1 > undefined, val2 > undefined, total > undefined
      //Execution phase  num1 > 10, num2 > 5, total > 15 total is returned back to the parent or glob executional context

// for result2 new variable environment+ thread will created
//  memory phase val1 > undefined, val2 > undefined, total > undefined
// execution context  num1 > 10, num2 > 5, total > 15 total is returned back to the parent or glob executional conte
 
// *************************** Call Stack ****************************

//  |        |
//  |        |   one() isko execute karne k liye hum isse stack mai leke jaate hain
//  |        |   execution k baad one() method ko remove kar dete hain
//  |________|

// when function inside functionis called then 
// Global excu > one() is callby two() and two is called by three() then which one will removed at first from callstack LIFO will used

    