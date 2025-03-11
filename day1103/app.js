// console.log('hi -1');

// function hello(){
//     console.log("hello word");
    
// }

// for(let i  = 1;i<=4;i++){
//     console.log(i);
// }
// // hello()

// setTimeout(function () {
//     console.log("hi -3"); 
// },0)
// console.log('hi -2');

// const months = ["Jane","Feb","March"]
// // const maptest = months.map((mo,i)=>{
// //             console.log(mo,i);
// //             return mo.toUpperCase()
// // })
// const filtermonth = months.filter((mo,i)=>{
//             console.log(mo,i);
//             return mo.toUpperCase()
// })


// console.log("Start");

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log("End");
// console.log("--------------------------------------ayscrinus---------------");

// console.log("Start");

// setTimeout(() => {
//   console.log("Inside setTimeout");
// },0);

// console.log("End");


// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         let success = false;
//         if (success) {
//           resolve("Data fetched");
//         } else {
//           reject("Error fetching data");
//         }
//       }, 2000);
//     });
//   }
  
//   // Handling the Promise
//   fetchData()
//     .then((data) => {
//       console.log(data); // "Data fetched"
//     })
//     .catch((error) => {
//       console.log(error); // "Error fetching data"
//     });

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


//synchronous and asyncronus

// function fetchData() {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve("Data fetched"), 2000);
//     });
//   }
  
//   fetchData().then((data) => console.log(data));
  



// promises
// const a = new Promise((resolve,reject)=>{
//     resolve({})
//             reject("promese rejected as soon")

// })
// -----
// let n=11
// const b =  new Promise((resolve,reject)=>{
// if(n==10){
//     resolve("is yes")
// }else{
//     reject(" not")
// }
// })

// b.then((data)=>{
//     console.log(`this number ${data} 10`);
// }).catch((data)=>{
//     console.log(`this number is ${data} 10`);
    
// })




//  let stocks = {
//     Fruits : ["strawberry", "grapes", "banana", "apple"],
//     liquid : ["water", "ice"],
//     holder : ["cone", "cup", "stick"],
//     toppings : ["chocolate", "peanuts"],
//  };

// let production = () =>{

//     setTimeout(()=>{
//       console.log("production has started")
//       setTimeout(()=>{
//         console.log("The fruit has been chopped")
//         setTimeout(()=>{
//           console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
//           setTimeout(()=>{
//             console.log("start the machine")
//             setTimeout(()=>{
//               console.log(`Ice cream placed on ${stocks.holder[1]}`)
//               setTimeout(()=>{
//                 console.log(`${stocks.toppings[0]} as toppings`)
//                 setTimeout(()=>{
//                   console.log("serve Ice cream")
//                 },2000)
//               },3000)
//             },2000)
//           },1000)
//         },1000)
//       },2000)
//     },0)
  
//   };
//   production()
// -----
// let a =false
//   function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if ( a == true) {
            
//             resolve("Data fetched successfully!");
//         }else{
//             reject("data not")
//         }
//       }, 2000);
//     });
//   }
  
//   fetchData().then((data) => console.log(data)).catch((data)=>console.log(data));

// ------------
// function checkNumber(){
//     return new Promise((resolve,reject)=>{

//         let number =Math.round( Math.random()*10)
//         if(number %2 == 0){
//                     resolve(number  + " is even")
//         }else{
//                     reject(number +" is odd")
//         }
//     }
//     )
// }

// checkNumber().then((data)=>console.log(data)).catch((data)=>console.log(data));

// -------------------
function step1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(" Step 1 completed");
        resolve("Data from Step 1");
      }, 1000);
    });
  }
  
  function step2(previousData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(" Step 2 received:", previousData);
        resolve("Data from Step 2");
      }, 1000);
    });
  }
  
  function step3(previousData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(" Step 3 received:", previousData);
        resolve("Process complete!");
      }, 1000);
    });
  }
  
  // Chaining promises
  step1()
    .then(step2)
    .then(step3)
    .then((finalMessage) => console.log(finalMessage))
    .catch((error) => console.log("Error:", error));
  











