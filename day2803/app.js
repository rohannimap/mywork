// new Promise((resolve,reject)=>{
//     resolve("Success")
//     function latest(){

//         console.log("second")
//     }
//     latest()

// }).then((value)=> console.log("value",value))

// setTimeout(() => {
//     console.log("third")
// },);
// console.log("four")
// -------------

// let arr = [1,2,3,4,5]
// delete arr[0]
// arr.shift()
// console.log(arr);
// arr.splice(1,1)
// console.log(arr);
// let b = arr.map((element,index,array)=> {element*2 } )
// console.log(b);
// ----------------------
// let names = 'Bilbo, Gandalf, Nazgul';
// let arr = names.split(', ');
// // console.log(arr);
// for (let name of arr) {
//   console.log( `A message to ${name}.` ); 
// }
// -----------------------
// let arr = "rohan,hakke,test".split(",",2)
// let arr = ['rohan','hakke','tea'];
// // let a = "rohan"
// // // console.log(arr);
// // let s = a.split('')
// // console.log(s);
// let j = arr.join(';');
// console.log(j);
// ---------------------------
// console.log("1 && 2 = "+(1 && 2)); 
// console.log(1&&2);
// console.log( "A"+"B"-"2");   //nan
// console.log( "A" - "B" + "2");   //nan2
// console.log(1 +  -"1" + "2");
// console.log(1 +  "1" + "2");
// console.log(1 -  "1" + "2");
// console.log(1 -  "1" );
// console.log(1 -  "1" + "2");
// ----------------------------
// let map = new Map();
// map.set('1', 'str1');  
// map.set(1, 'num1');     
// map.set(true, 'bool1'); 
// console.log(map);
// console.log(typeof map);
// -------------------------------
// let john = { name: "John" };
// let ben = { name: "Ben" };
// let visitsCountObj = {};
// // console.log(visitsCountObj);
// visitsCountObj[ben] = 234; 
// visitsCountObj[john] = 123; 
// console.log(visitsCountObj[ben]);
// ---------------------------------
// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion',    50]
//   ]);
//   for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable); 
//   }
//   for (let amount of recipeMap.values()) {
//     console.log(amount); 
//   }
//   for (let entry of recipeMap) { 
//     console.log(entry); 
//   }
// ---------------------------------
// let user = {
//     name: "John",
//     age: 30
//   };
// //   for (let [key, value] of Object.entries(user)) {
// //     console.log(`${key}:${value}`);
// //  }
// console.log(Object.entries(user));
// ------------------------------------
// let a = 8
// function test(){
// {
//     console.log(a);
// }
// let deno =()=>{
//     console.log(a);   
// }
// console.log(deno());
// }
// test()
// -----------------------------------
// {
//     let message = "Hello";
//     console.log(message);
// }
// {
//     let message = "Goodbye";
//     console.log(message);

// }
// ------------------------------
// function sayHi(name,message) {
//     console.log(`hello i am ${name}, wellcome to ${message}`);
//   }
//   setTimeout(sayHi, 2000,"rohan","mumbai");   // also we use in that variable arrgument
//   setInterval(() => console.log("rohan")
//   , 2000);
// -----------------------------------
// // nestedsettineout
// let timerId = setTimeout(function tick() {
//     console.log('tick');
//     timerId = setTimeout(tick, 2000); 
//   }, 2000);
// ------------------------------------
// let user = {
//     firstName: "John",
//     sayHi() {
//       console.log(`Hello, ${this.firstName}!`);
//     }
//   };
// user.sayHi()
  
//   setTimeout(user.sayHi, 1000);

// function sen(str){
// let a = str.split(' ').map((ele)=>ele.split('').reverse().join('')).join(' ')
// console.log(a);

// }
// sen("hello rohan")



// function reverseWordsManual(sentence) {
//     let result = "";
//     let word = "";

//     for (let char of sentence) {
//         if (char === " ") {  // If space is found, add reversed word
//             result += reverseString(word) + " ";
//             word = "";
//         } else {
//             word += char;
//         }
//     }
//     result += reverseString(word); // Reverse and add the last word
//     return result;
// }

// function reverseString(str) {  // Manual string reversal
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// console.log(reverseWordsManual("hello world")); 
// // Output: "olleh dlrow"
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof NaN);
// -----------------
// function isFalsy(value) {
//     return !value;
// }
// console.log(isFalsy(NaN));
//  -------------------------

function count(arr){
    let c = []
    for(let w of arr){
        if(c[w]){
           c[w]+=1
        }else{
            c[w] = 1
        }
    }
    for(let j = 0;j<arr.length;j++){
        if(c[arr[j]] ===1){
            console.log(arr[j]);
        }
    }
}
let a = "rohanh"
count(a)

// --------------------------
