//js is syncronush single threded language
//execution context
// var n =2
// function sqr(num){
//    return num *=num

// }
// console.log(sqr(n));
// console.log(sqr(4));


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response =>  response.json())
//    // Convert response to JSON
//   .then(data => console.log(data))   // Handle the data
//   .catch(error => console.error('Error:', error)); // Handle errors

// fetch("https://dummyjson.com/products",{
//     method:'POST'
// })
// // .then((res)=>{
// //     res.json().then((data)=>{
// //         console.log(data);
// //     })
// // })
// // or ----
// .then((res)=>{
//     return res.json()
// }).then((data)=>{
//     console.log(data);
// })

// aysc and await
// async function makeres(){
//     const url = 'https://dummyjson.com/products'
//     const datares= await fetch(url)
//     setTimeout(
//         ()=>{

//             console.log(datares);
//         },5000
//     )
// }
// makeres()
// ------

// function hii(){
//     console.log("hello");
//     console.log("h");
// throw "error in helllo"

//     console.log("end");
    
// }


// ------

// async function seedata(){
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1") 
    
//     const data = await res.json()
//     console.log(data);

  
     
// }
// seedata()
// async function fetchData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const data = await response.json();
//     console.log(data);
//   }
  
//   fetchData();
  
// ------------
// const getData = async () => {
//     let y = await "Hello World";
//     console.log(y);
// }

// getData();
// console.log(1);
// console.log(2);
// --------------
// fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => {
   
//     console.log(data);
//   })
//   .catch(error => {
   
//     console.error(error);
//   });


// const num = new Promise((resolve,reject)=>{
// const number = Math.random()*100
// if(number <50){
//     resolve(`well number ` + number)
// }else{
// reject(`number is greater that 50 < ${number}`)
// }
// },2000)

// num.then((data)=>{
//     console.log(data);
// }).catch((data)=>{
//     console.log(data);
    
// })

//Callback example

// function taskA(task) {       
//     setTimeout(function () {    
//       console.log("Task A has completed.");       
//       task();                 
//     }, 2000)                   
//   }
  
//   function taskB() {               
//     console.log("Task B has completed.");     
//   }
  
//   taskA(taskB);                       


console.log(x);
var x ;
getName();
function getName(){
    console.log("test");
    
}
function test(){
    
}




















