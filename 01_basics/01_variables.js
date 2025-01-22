const accountId = 123554 //value of const can not be changed after a value is assigned to it
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; //undefined if we dont give it any vale
 

// accountId = 2 //assignment in constant is not valid
// {
//     curly brases is called scope
//     initially js dont work on basis of scope
//     let is used instead of var
//     because of issue in block scope and functional scope
// }

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
