// // 'use strict'   //if use 'use strict' then this.a will be give error
// const obj = {
//     a: "foo",
//     b: function () {
//       console.log(this.a);
//     },
//   };
  
//   const c = obj.b;
//   c();       //undefined
// -----------------------------------
// const obj = {
//     a: "foo",
//     b: function () {
//       console.log(this.a);
//     },
//   };
  
//   const c = obj.b;
//   c();
   
//   arr.map(()=> {})     // error 
// -----------------------------
// let x = 1;
// if(function f(){}){
//     x += typeof f;
// }
// console.log(x);     //1undefined
// -----------------------------------
//    function f(){}
// console.log( typeof f());
// -----------------------------------
// (function f(){
//     try{
//         throw new Error();
//     }
//     catch(x){
//         var x = 1, y = 2;
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();
// -----------------------------
// function foo2()
// {
//   return    //if we paranthisis make down then it give error
//   {
//       bar: "hello"
//   };
// }
// console.log(foo2().bar); // output?
// function foo2() {
//     return {
//       bar: "hello"
//     };
//   }
  
//   console.log(foo2().bar);
// -------------------------------
// console.log("1 && 2 = "+(1 && 2)); 
// console.log(1&&2);

// console.log( "A"+"B"-"2");   //nan
// console.log( "A" - "B" + "2");   //nan2

// console.log(1 +  -"1" + "2");
// console.log(1 +  "1" + "2");
// console.log(1 -  "1" + "2");
// console.log(1 -  "1" );
// console.log(1 -  "1" - "2");
// var a={},
//     b={key:'b'},
//     c={key:'c'};

// a[b]=123;
// a[c]=456;
// // console.table(a);
// console.log(a[b]);      // 456   in this the {} empty ther is defaut "Object Object" is key there

// ----------------------------
// var a = {},b = {},c={},d={}
// console.table(a);
// a[b]= 10
// a[c]= 30
// a[d]= 20
// console.table(a);
// // --------------------
// Write only one function sum so that both log statements will print result 5
// function sum(a,b){
//     if(b!==undefined){
//         return a+b
//     }
//     return function(c){
//       return  a+c
//     }
// }
// console.log(sum(2,3)); 
// console.log(sum(2)(3));
// // ----------------------------------------
// modify this code so that result will print 1 to 9 with the gap of 1 second
// async function run(){
//     for(let i=1;i<=10;i++){
//         await new Promise((resolve)=>setTimeout(()=> {
//             console.log(i)
//             resolve();
//         }, 1000 *i))  
        
//     }
// }
// run();
// -----------------------------------
// async function test(){
//     console.log("start");
//   await new Promise((resolve)=>{
//     setTimeout(()=>{
//         console.log("middle");
//         resolve()
        
//     },2000)
//   }) ;
//     console.log("end");
// }
// test()
// -------------------------

// let map = new  Map()
// console.log(map);
// map.set("name","rohan")
// map.set("age",22)
// map.set("city","solapur")
// map.set("pn","9128")

// // console.table(map);

// // console.table(map);
// // console.log(map.get("name"));
// // console.log(map.has("pn"));
// // console.log(map.has("rohan"));
// // console.log(map.delete("pn"));
// console.log(map.size);
// // console.table(map);
// console.log();

// for(let  [ key,value] of map){
//     console.log(key,value);
    
// }

// -----------------------
// let set  =  new Set()
// set.add(1)
// set.add(2)
// set.add(3)
// set.add(4)
// set.add("rohan")

// console.table(set);

// ---------------------
// console.log('10' - '2' + '5');  //85
// console.log('5' + '2' - '10');  //42
// console.log(true + false - '1' + '2');   //02
// console.log(10 == '10' && '10' - 1 === 9);   //1

// let a = '5';
// let b = 5;
// let c = false;
// console.log(a + b - c); //55
// console.log(a + b + c); //55false

// console.log('5' + 10 - 5);
// console.log(('10' * '2') == (true + true + true + true + true));
// console.log('5' - - '2');
// console.log('3' + 2 * 2 - '1');
// console.log(('3' - '2' + '5') * true);

// let x = true == 1;
// let y = '1' == 1;
// let z = '1' === 1;
// console.log(x + y + z);

// var count = 0;
//  function printCount(){
//     // console.log(count);
//     // console.log(count === 0);
//     if(count === 0){
//         var count = 10;
//         console.log(count)
//     }
//     console.log(count)
//  }
//  printCount()
//  console.log(count) 

// ----------------------
// var n = 0
// function print(){
//     if(n === 0){
//         var n = 10
//         console.log(n);   
//     }
//     // console.log(n);
// }
// print()
// console.log(n);

// -----------------------
// for(var i = 0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },1000)
// }
// -------------------
// let a = [1,2,5,6]
// for(let i = 1;i<a.length;i++){
//     // console.log(a[i]);
//     if((a[i]-a[i-1])!==1){
//             for(let j  = a[i-1];j<a[i]-1;j++){
//                 console.log(j+1);
//             }
//     }
// }
// ---------------------------
// function counter(){
//     console.log("hello");
    
//     let count =0
//     function incre(){
//         count++
//         console.log(count);
//     }
//     // function decr(){
//     //     count--
//     //     console.log(count);
//     // }
//     incre()
// }
// var counter1 = counter()
// -----------------------
// async function timer(){
//     console.log("1");
//   function name(){
//         console.log("rohan");
//     }
//     name()
//     console.log("2");
//    await new Promise((resolve)=>{
//     setTimeout(()=>{
//         console.log("3");
//         resolve()
        
//     },2000)
//    }) 
//     console.log("4");
// }
// timer()

// --------------------------
// async function fetchUser() {
//         let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//         let user = await response.json();
//         // let response = fetch("https://jsonplaceholder.typicode.com/users/1");
//         // let user =  response;
//         console.log(user);
// }
// fetchUser();
// -------------------------
// const person = {
//    details : function (){
//     return `my name is ${this.name},and my age is ${this.age}`;
//    }
// }   
// const persion1 ={
// name:"rohan",
// age:22
// }
// console.log(person.details.call(persion1));
//  ---------------------------

// // truthy
//  const isactive = true
//  const str = "rohan"     // it is the truthy value.
//  if (str) console.log(`hello i am ${str}`);
  
// -----------------------------
// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
  
//  console.log(person.fullName.call(person2));
  
// -----------------------------------
// console.log(0.1 * 3 == 0.3);    // false
// for (var i = 0; i < 10; i++) {   // 10 time 10
//     setTimeout(() => {
//         console.log(i);  
//     }, 1000);
// }
// -----------------
// function outer() {
//     var b = 2;
//     // console.log(b);
//     function inner() {
//         b++;  
//         console.log(b);
//         var b = 3;
//     }
//     inner();
// }
// outer();

// --------------------------
// (function () {
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1, y = 2;
//         console.log(x);  // 1
//     }
//     console.log(x);  
//     console.log(y);  
// })();
// ----------------------
// Promise.resolve(3)
//     .then((res) => {
//         // console.log(res);
//     })
//     .catch()  
//     .then()  
//     .then((res) => res)  
//     .then()  
//     .catch()  
//     .then((res) => {
//         // console.log(res); 
//     });

// --------------------------------
// console.log(test()); // true
// function test() {
//     return true;
// }
// ---------------------------------
// let name = Symbol("id")
// // id = "rohan"
// console.log(name.key);

// -----------------------------------
// async function test(){
//     let api = "https://jsonplaceholder.typicode.com/todos/1"
//     let fetched = await fetch(api)
//     let data = await fetched.json()
//     console.log(data);
// }
// test()
// -----------------------------------
function array(arr){
let arr1 = []
let arr2 = []
let middle  = arr.length/2
for(let  i = 0;i<arr.length;i++){
    (i<middle)? arr1.push(arr[i]): arr2.push(arr[i])
}

console.log(arr1);
console.log(arr2);
}
let arr = [1,2,3,4,5,6,7,8]
// let a = [1,2,3,4,5,6,7,8,8,1,2]
array(arr)
