// const cart = ["a","b","c"]

// createOrder(card,function (orderId){
//     proccedToPayment(orderId)

// }); //orderId
// -------------------
// const arr1 = [11,2,9,3,7,4]

// function number(arr){
// let maxnumber = arr[0]
//     for(let i =1;i< arr.length;i++){
//         if(arr[i]>maxnumber){
//             maxnumber = arr[i]
           
//         }
          
          
//     }
//     return maxnumber
// }
// console.log(number(arr1));
 
// let name = "rar"
// console.log(name ==( name.split("").reverse().join('')));

// -------------
// const arr1 = [1,2,3,4,5,6,7,8,10,44,23,46]

// function checknumber(arr){
//     return arr.filter(
//         function(num){
//             return num %2 ==0
//         }
//     )
// }
// const newarr = checknumber(arr1)
// console.log(newarr);
// --------------

// function num(number){
//     let sum = 1
// for(let i = 1;i<=number;i++){
// sum = sum*i
// }
// return sum
// }

// console.log(num(10));

// ----------------
// function check(number){
// for(let i =2;i<number*number/2;i++){
//   if( number % i ==0){
//     return true
//   }
//   return false
// }
// }
// let isok = check(3) == false ? "no":"yes"
// console.log(isok );

// ----------------------
// function fibo(number){
//     let fnumber = 0
//    let snumber = 1

//     for(let i = 0;i<=number;i++){
          
            
//              sumnumber = sumnumber+i

//         }
        
// }
// fibo(10)

// -------------------
// Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order. 

// const arr = [1,3,5,9,4,2,7]
// arr.forEach((element,index) => {
//     console.log(element,index);
    
// });

// --------------
// console.log(0.1*3==0.3); 

// for(var i=0; i<10; i++) { setTimeout(()=>{ console.log(i);

//  },1000) }
//   function outer(){ var b = 2 function inner(){ b++; console.log(b) var b = 3; 

//   } inner(); } outer(); (function () { try { throw new Error(); 

//   } catch (x) { var x = 1, y = 2; console.log(x); }
//    console.log(x);
//    console.log(y); })(); console.log(true + 1);
    
//    Promise.resolve(3) 
//    .then((res)=>{ console.log(res) })
//    .catch() .then() .then(res=>res)
//     .then() .catch() .then((res)=>{ console.log(res) }) 
//     console.log([2] === [2]); test(); 
//     function test() { return true }


// ------------------
// const arr1=[
//     {name:"rohan",age:20},
//     {name:"rajesh",age:30},
//     {name:"hakke",age:25}
// ]
// const so =[]
// arr1.forEach((val)=>

//     console.log(val.age)
// )

// -----------
// let a = new Promise(
//     (resolve,raject)=>{
//        resolve("rohan");


//     }
// )
// a.then((data)=>console.log(data))

// -------------------------------
// let dataname = fetch('https://jsonplaceholder.typicode.com/users')
// dataname.then((data)=>{
//     console.log(data);
// })

// ---------------
// const mySymbol = Symbol();
// console.log(mySymbol); 

// ------------
// const sym1 = Symbol("description");
// const sym2 = Symbol("description");
// console.log(typeof sym1 == typeof sym2);
// console.log(sym1 === sym2); 
// // --
// const sym1 = Symbol.for("description");
// const sym2 = Symbol.for("description");
// console.log(typeof sym1 == typeof sym2);
// console.log(sym1 === sym2); 

// --------------------
// const user = {
//     name: "John",
//     [Symbol(123)]: 12345
// };

// // console.log(user); 


// // console.log(Object.keys(user)); 
// console.log(Object.getOwnPropertySymbols(user)); 

// ----------
// let a = [2,4,5,6]

// for(let c of a){
//     console.log(c);
// }
// --------
// const numbers = [1, 2, 3, 4, 5];
// const squared = numbers.map((num)=>num);
// console.log(squared); 

// const numbers = [1, 2, 3, 4, 5];
// const squared = numbers.map(num => num * num);
// console.log(squared); // [1, 4, 9, 16, 25]

// ----------
// const ages = [12, 25, 17, 30, 40];
// const adults = ages.filter(age => age%2==0);
// console.log(adults); 

// let name = ["test","adasas","raje","ha","rer"]
// let b = name.filter(t=>t.length<4)
// console.log(b);

// const users = [
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 25 },
//     { name: "Charlie", age: 16 },
//     { name: "David", age: 30 }
//   ];
//   const adults = users.filter(user => user.age >= 18);
//   console.log(adults);
  
// -------------
// const sentence = "apple,banana,grape   n -j";
// const fruits = sentence.split(",");
// console.log(fruits); 

const t = 121
const b =parseInt( t.toString().split('').reverse().join(''));
console.log(t == b);
console.log(typeof b);


// const b =text.split("").reverse().join("");
// console.log( text == b);




