// function calculator(num){
// return num
// }
// console.log(calculator(5));
// function calculator(...num){         //this is another type and one functin provide multiple object
// return num
// }
// console.log(calculator(5,1,26,7,8));
// console.log(typeof calculator);



// Scope
// var c = 4
// let a = 300
// if(true){
//     let a = 1
//     const b = 2
//     var c = 3
//     console.log(a);

// }
// console.log(a);
// console.log(b);
// console.log(c);

// function one(){
//     const username = "rohan";
//     function two(){
//             const yt = "youtube";
//             console.log(username);
            
//     }
//     // console.log(yt);
//     two()
// }
// one()

// console.log(addone(5));
 
// function addone(num){
// return num+1
// }

// const addTwo=function(num){
// return num +5;
// }
// console.log(addTwo(5));
  
// arrow functin and more

// const user={
//     username : "rohan",
//     price:999,

//     welcomemsg:function(){
//         console.log(this.username +',welcome');   // without this it give error not defined
//         console.log(this);
        
        
//     }
// }
// user.welcomemsg()
// console.log(this);

// const check =()=>{
//     let username = 'rohan'
//     console.log(this);
    
// }
// check()

// const sum = (a,b) =>{
//     return a + b
// }
// console.log(sum(5,4));

// const obj = ()=>({       // to get object return requrire to be in ( write in that )
// username : "rohan"
// })
// obj()


// immediate invoke
// (
//     function test(){
//         console.log("check invoke");
        
//     }
// )();      // if the here semicolun is not give then the code will not exicuted.
// (
//     ()=>{
//         console.log("arrow function in the invloke ");
        
//     }
// )();


// javascript executaion context

// -gloable execution conetxt 
// -function execution context and more...

// let a =  0;
// for (a;a<20;a++){
//     console.log(a);
    
// }















