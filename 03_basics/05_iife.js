// Immediately Invoked function Expression (IIFE)
// Global Scope Pollution

(function chai (){
    //it is named iife
    console.log('DB connected'); 
})();//semi-colon is important to end the context
//other wise next function code will note run
// code still runs inside parenthesis(iife)

(function aurcode(){
    console.log(`DB CONNECTED TWO`);
})();

( () => {
    //unnammed iife
    console.log(`DB CONNECTED TWO`);
})();

( (name) => {
    //parameter passing in iife
    console.log(`DB CONNECTED TWO ${name}`);
})(`Harshak`);