//reverse the string
//  function reversestr(b){
//     console.log( b.split('').reverse().join(''));
// }
// reversestr("rohan");
// -----------------------

// check anagram
// function a(c,b){
//        return c.split('').sort().join('')===b.split('').sort().join('')
// }
// console.log( a('rohan','hanor'));
// -------------------

// async function test(){
//     let a= new Promise((resolve,reject)=>{
//         resolve('rohan')
//     })
//   console.log(await a);
//   console.log("a wait");
  
//     let b= new Promise((resolve,reject)=>{
//         resolve('sachin')
//     })
//   console.log(await b);
//   console.log("b await");
//     }
    
// test()
// -------------------------------
//  let b  = async ()=>{
// console.log(1);
//  function name(){
//     console.log("2");
//     return "3"
// }

// let newVal = await new Promise((resolve)=>{
//  setTimeout(()=>{
//    resolve( name())
// },3000)})
// console.log(newVal)
// console.log(3);

// }
// b()

// ---------------------------

// let a  = [1, 2, 2,3,4,2, 4, 5]

// function uniqueNumbers(a) {
//     return a.filter((num, index) =>{ 
//         // console.log("num",num)
//         // console.log("index",index)
//         // console.log("val",a.indexOf(num))
//         return a.indexOf(num) === index});
//   }
// console.log( uniqueNumbers(a));

// function check(a){

// }
// --
// //  console.log(a.sort());
//  let b =[...new Set(a)]    //  using set and spread ope
// //  for(let i=0;i<a.length;i++){
// //     // console.log(a[i]);
    
// //    if(a[i] !== a[i+1]){
// //     console.log(a[i]);
// //     b.push(a[i])
// //    }
    
// //  }
//  console.log(b);
 
//   ----------------------------

// function ana(a,b,){
//       return  a.split('').sort().join('') === b.split('').sort().join('') 
// }
// console.log(ana("rohan","anhor"));
//  --------------------

// // ****************************************************
// // find missing number in arry
// let arr = [4,5,6,3,8]
// let b = arr.sort()
// let min = b[0]
// // console.log(min);

// for(let i=b[0];i<=Math.max(...arr);i++){
// // console.log(i);

// if(b[i-2]!==i){
//     console.log(i);
//     break
    
// }

// }
// // let arr = [6,7,8,]
// let mis = -Infinity
// // console.log(arr.length);
// // console.log(Math.max(...arr));



// // for(let i =0;i<arr.length;i++){
// // //    console.log(arr[i]);
// //    for(let j = 1;j<=arr.length;j++){
           
// //    }
// // }
// // ***********************************************
// let name = function na(a){

// return a
// }

// -----------------
// let a = [1,2,3,4]
// a.pop(a))

// console.log(a);
// ----------------------------
async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData();

