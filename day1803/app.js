// // Callback Hell (also known as Pyramid of Doom) is a 
// // situation in JavaScript (or any asynchronous programming language) 
// // where multiple nested callbacks make the code difficult to read, maintain, and debug. 

// function getData(callback) {
//     setTimeout(() => {
//         console.log("Fetching data...");
//         callback("Data received");
//     }, 1000);
// }

// function processData(data, callback) {
//     setTimeout(() => {
//         console.log("Processing:", data);
//         callback("Processed Data");
//     }, 1000);
// }

// function saveData(data, callback) {
//     setTimeout(() => {
//         console.log("Saving:", data);
//         callback("Saved successfully");
//     }, 1000);
// }

// getData((data) => {
//     processData(data, (processedData) => {
//         saveData(processedData, (message) => {
//             console.log(message);
//         });
//     });
// });

// _______________________
// Types of function 
// 1. Named function
// function test(){
//     return 2*2
// }
// console.log(test());
// __________________________
// 2. Arrow function  : provide a cleaner syntax and have different behavior 
// compared to regular functions,especially regarding the this keyword.
// let hello = (name)=>`hello i am ${name}`;
// console.log(hello('rohan'));
// --------------
// let a = x=> x*x
// console.log(a(10));
// --------------
// let b = ()=> 'hello'
// console.log(b());
// ---------------------
// const person = {
//     name: "Alice",
//     greet: function() {
//         setTimeout(() => {
//             console.log(`Hello, my name is ${this.name}`);             //using this
//         }, 1000);
//     }
// };
// person.greet();
// -----------------------
// function normalFunction() {
//     console.log(arguments);
// }
// normalFunction(1, 2); // Works

// const arrowFunction = () => {
//     console.log(arguments);
// };
// arrowFunction(1, 2, 3); // Error: arguments is not defined

//  ______________________________________
// 3. IIFE (Immediately Invoked Function Expression)
// (function() {
//     console.log("hello");
// })();
// ---------------------------
// (function hello(name)
// {
//     console.log(`hello ${name}`);
// })('rohan')
// --------------------------------
// _____________________
// 4. Callback functon 
// function a (name,test){
// console.log(" hello ",name);
// test();
// }
// function b(){
// console.log("hello i am call back");
// }
// a('rohan',b);
// ----------------------------

// ________________________
// 5. Higher order function
// ______________________
// 6. first class function
// _____________________
// 7. function expresstion
// const square = function (num) {
//     return num * num;
// };
// console.log(square(4));
// ________________________

// 8. recursion                            IMP
// function factorial(n) {
//     if (n === 0) return 1;
//     return n * factorial(n-1 );
// }

// console.log(factorial(4)); 

// ____________________
// promises
// let test = new Promise((resolve,reject)=>{
//     let a = 1
//     setTimeout(()=>{
//         if(a%2==0){
//             resolve("this is the even")
//         }else{
//             reject("not a even number")
//         }
//      } ,2000 )
// })
// test.then(data=>console.log(data))
// .catch(data=>console.log(data))
// ----------------------------
// new Promise((resolve, reject) => {
//     setTimeout(() => resolve(10), 1000);
// })
//     .then(num => {
//         console.log("Step 1:", num);
//         return num * 2;
//     })
//     .then(num => {
//         console.log("Step 2:", num);
//         return num * 3;
//     })
//     .then(num => {
//         console.log("Final Result:", num);
//     })
//     .catch(error => console.error(" Error:", error));
// -------------------------
// fetch("https://jsonplaceholder.typicode.com/posts/3")
//     .then(response => response.json())  
//     .then(data => console.log(" Post Title:", data.title)) 
//     .catch(error => console.error(" Fetch Error:", error));
// --------------------------------
const p1 = new Promise(res => setTimeout(() => res("One"), 1000));
const p2 = new Promise(res => setTimeout(() => res("Two"), 2000));

// Promise.all([p1, p2]).then(results => console.log(results));
// // Output: ["One", "Two"] (after 2 seconds)
// Promise.race([p1, p2]).then(result => console.log(result));
// // Output: "One" (after 1 second)
// const p3 = new Promise((_, reject) => setTimeout(() => reject("Error"), 1000));
// const p4 = new Promise(res => setTimeout(() => res("Success"), 2000));

// Promise.any([p3, p4]).then(result => console.log(result));
// // Output: "Success" (after 2 seconds)

// --------------------------------

async function name(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const data = await res.json();
    console.log(data);
    }
name()


 