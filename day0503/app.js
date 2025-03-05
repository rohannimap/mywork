// function checkOddNumbers(arr) {
//     let result = [];
//     for (let num of arr) {
//         result.push(num % 2 !== 0);
//     }
//     return result;
// }

// // Example usage
// const numbers = [1, 2, 3, 4, 5];
// console.log(checkOddNumbers(numbers)); // [true, false, true, false, true]



//test
// function checkArr(arry){
// let arr2 = []
// for(let ele of arry){
//     if (isPri) {
        
//     }
// }
// }
// let arr1= [1,2,3,4,5,6,7]
// console.log((checkArr(arr1)));




// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// function checkPrimeInArray(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(isPrime(arr[i]));
//     }
//     return result;
// }

// // Example usage
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(checkPrimeInArray(numbers)); 
// // Output: [false, true, true, false, true, false, true, false, false, false]



// const x = 1;
// {
//   console.log(x); // ReferenceError
//   const x = 2;
// }
// {
//     let x = 1;
//   }
//   console.log(x); // 

// console.log("start");
// console.log("a");
// setTimeout(
// function a(){
// console.log("end");

// },3000);
// setTimeout(
// function a(){
// console.log("2");

// },2000);
// setTimeout(
// function a(){
// console.log("1");

// },1000);

// console.log("start");
// setInterval(function a(){

//     console.log("a");
// },2000);
// fetch("http://api.netflix.com").then(
//     function b(){
//         console.log("b");
        
//     }
// )
// console.log("end");



// console.log("Start");
// for (let i = 0; i < 5e9; i++) {} // Simulating a time-consuming task
// console.log("End");

// console.log("Start");

// setTimeout(() => {
//     console.log("Inside setTimeout"); // Executes later (non-blocking)
// }, 2000);

// console.log("End");


// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Data Fetched");
//         // callback(); // Executes after data is fetched
//     }, 2000);
// }

// fetchData(() => console.log("Process Completed"));


// let fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let success = false;
//         success ? resolve("Data Fetched") : reject("Error Occurred");
//     }, 2000);
// });

// fetchData
//     .then((res) => console.log(res)) // Success
//     .catch((err) => console.log(err)); // Error

// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
//   }).listen(8080);


function myDisplayer(something) {
    console.log(something);
    
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);
  
  