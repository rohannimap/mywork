// let b = undefined
// console.log(b);
// let c;
// console.log(c);

// ---------------------------------
// const a = 6  //110
// const b = 4    //100
// console.log(b^a);

// ---------------------------------
// let a = 10
// // let b = 12
// // console.log(a && b);
// // console.log(a & b);
// let b = ~a
// console.log(b);

// ----------------------------------
// //arry destructring
// let [a, b, c,d,e] = [1, 2, 3,8,7];
// // console.log(a); 
// // console.log(b); 
// console.log(e);

// --------------------------------
// // object destructuring
// let { name, age ,number} = { name: "Alice", age: 25 ,number:9158};
// // console.log(name); // "Alice"
// // console.log(age); // 
// console.log(number);

// -----------------------
// // module and import
// // main.js
// import { add } from './math.js';
// console.log(add(2, 8)); // 5
// ----------------------------
// set and map
// // Map
// let map = new Map();
// map.set("name", "Alice");
// console.log(map.get("name")); // "Alice"

// // Set
// let set = new Set([1, 2, 3, 3]);
// console.log(set); // Set { 1, 2, 3 }

// ------------
// const sym1 = Symbol("description");
// const sym2 = Symbol("description");
// console.log(typeof sym1 == typeof sym2);   //true
// console.log(sym1 === sym2);    // false
// // --
// const sym1 = Symbol.for("description");
// const sym2 = Symbol.for("description");
// console.log(typeof sym1 == typeof sym2);  //true
// console.log(sym1 === sym2);   //true

// let a = " rohan hakke "
// // console.log(a.toUpperCase());
// console.log(`the ${a} and`);
// console.log(`the ${a.trim()} and`);
// console.log(`the ${a.trimStart()} and`);
// console.log(`the ${a.trimEnd()} and`);

// ---------------------------
// let a = "hellotesl"
// console.log(a.startsWith("h"));
// console.log(a.includes("lots"));
// let b =  a.split()
// let b =  a.split("")
// console.log(typeof b);  //object
// console.log(typeof a)   //string
// ----------------------------
// let a  = [[1,2,3],[4,5,6],[7,8,9]]
// a.forEach(
//     check =>{console.log(check.join(" "));
        
//     })
// for (let i = 0;i<3;i++){
// console.log(" ");

//     for(let j = 0;j<3;j++){
//         console.log(a[i][j]);
        
//     }
// }

// -------------------
// let n =5
// for(let i =n;i>=1;i--){
//     let a = ""
// //    console.log(typeof a);
    
//     for(let j  = 1;j<=i;j++){
//             a+="#"
//     }
//     console.log(a);
    
// }
// -------------------
// let n=5
// for(let i = 1;i<=n;i++){
// let a = ""
//     for(let j =1;j<=i-1;j++){
//             a=+""
//             for(let k =1;k<=i-1;k++){
//                     a+="#"
//             }
//     }
//     console.log(a);
    
// }
// -----------
// //dice roll
// function rollDice() {
    
//     return Math.floor(Math.random() *4) +1;
// }
// for(let i =0;i< 5;i++){
//     let result = rollDice();
//     console.log(`You rolled a ${result}`);
// }

// -----------------------
// let number = 3.20
// console.log(Math.floor(number));
// -------------

// let res;
// for(let i = 0;i<20;i++){
// res =Math.floor( Math.random() *2)+1
//     console.log(res);
    
// }
// ---------------
// let array = [6,5,4,3,2]
// array.forEach(() =>{
//     console.log(currentValue, index, array);
// });

// ---------------
// impure function
// let counter = 0;
// function increment() {
//     counter++;
//     return counter;
// }
// console.log(counter); // 0
// console.log(increment()); // 1
// console.log(increment()); // 2
// console.log(counter); // 2

// ------------
// (function(a,checkFun){
//     checkFun();
//     console.log(a*2);
    
    
// })(2,newFun)
// function newFun(){
//     console.log("callback function in iife");
    
// }

// ----------------------------
// settime tricy question
// for (let i = 0; i < 5; i++) {
//     setTimeout(() => console.log(i), 0);
// }

// let j = 0;
// for (j = 0; j < 5; j++) {
//     setTimeout(() => console.log(j), 0);
// }

// --------------------

// let test  = new Promise((resolve,reject)=>{
//     if(2===4)
//         {
//         resolve("hello")
//     }else{

//         reject("yes")
//     }
// })
// test.then((data)=>{
//     console.log(data);
    
// }).catch((data)=>{console.log(data);
// })
// ------------------------
// async function functionName() {
    
// }
// --------------------

// async function testayn(){
//         return "hello"
// }
// testayn().then((data)=>{
//     console.log(data);
// })
// -------------------

// async function fetchData() {
//     let response = await fetch('https://api.example.com/data');
//     let data = await response.json();
//     return data;
// }

// fetchData().then(data => console.log(data));
// -----------------------

// async function example() {
//     console.log("Start");
//     let result = await new Promise((resolve) => setTimeout(() => resolve("Done"), 2000));
//     console.log(result); // "Done" after 2 seconds
//     console.log("End");
// }
// example();
// -----------------------
//  function hello(){
//     console.log("1  first work");
//    let b =   new Promise ((resolve)=>setTimeout(()=>{
//         resolve("2  set work");
//     },2000))
//     b.then((data)=>console.log(data)
//     )
//     console.log("3  final work");
// }
// hello()

// async function hello(){
//     console.log("1  first work");
//    let b =   await new Promise ((resolve)=>setTimeout(()=>{
//         resolve("2  set work");
//     },2000))
//     console.log(b)
    
//     console.log("3  final work");
// }
// hello()

// ---------------------
// async function fetchfun() {
//     console.log("hello");
    
    
//     let a = await  fetch('https://jsonplaceholder.typicode.com/users/7');
//     let res = await a.json();
//     console.log(res);
    
// }
// fetchfun()

// async function fetchData() {
//     try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/users/10`);
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }
// fetchData();

// async function fetchUserData(userId) {
//     try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//         if (!response.ok) {
//             throw new Error("User not found");
//         }
//         let user = await response.json();
//         console.log("User data:", user);
//     } catch (error) {
//         console.error("Error fetching user data:", error);
//     }
// }

// fetchUserData(1);
// -------------------------
function test(){
    let pro = new Promise((resolve,reject)=>{
      let fet =  fetch('https://jsonplaceholder.typicode.com/users/7');
     
      resolve(console.log(fet)),
      reject("error from api")
      
    })
    pro.then((data)=>console.log(data))
    
}
test()





