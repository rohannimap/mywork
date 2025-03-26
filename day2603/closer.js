function outer(arg){
return function inner(age){
console.log(arg);
console.log("it is inner ",age);


}
}
let exe = outer("hello i am rohan")
// console.log( outer("elle"));
exe(" test")

