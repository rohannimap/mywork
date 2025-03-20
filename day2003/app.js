// let b =(a)=>{
//     for(let i = 1;i<a.length;i++){
//         if(a[i]-a[i-1]!==1){
//                 for(let j = a[i-1];j<a[i]-1;j++){
//                         console.log(j+1);
    
//                 }
//         }
//     }
    
// }
// let c= [1,4,6,7,9]
// b(c);
// // --------------------------

// let a =  new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("i am rohan")
//     },2000)
// })
// a.then((data)=>console.log("hello",data)
// )
// -------------------
//chaning promises
// let a = new Promise((resolve)=>{
// setTimeout(() => {
//     resolve("it is fist promises")
// }, 2000);
// })
// let b = a.then((data)=>{
//     console.log(data);
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("it is seconf promises")
//         }, 2000);
//     })
    
// })
// b.then((data)=>{
//     console.log(data);
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("it is third")
//  },2000 )}
//     )
    
// }).then((data)=>console.log(data)
// )
// -----------------------------
// let a=  new Promise((reject)=>{
//     setTimeout(() => {
//         reject("it is error ")
//     }, 2000);
// })
// a.then((data)=>{
//     console.log(data);
    
// }).catch((err)=>console.log(err)
// )
// ------------------------------
// //promises all
// let a = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("hii it is first ")
//     },2000)
// })
// let b = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("hii it is second ")
//     },3000)
// })
// let c = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("hii it is third ")
//     },5000)
// })
// Promise.all([a,b,c]).then((data)=>{
//     console.log("all promised solved");
//     data.forEach((data,index)=>{
//             console.log(`the masg is ${data} and index is ${index}`);
//     })
// })
// // --------------------------------
// let a = [3,4,5,6,7]
// for(let b of a){
//     console.log(b);
// }
// console.log("-----------");
// for(let b in a){
//     console.log(b);
// }
// ----------------------
// let ea = ["a","b","c","d","e"]
// ea.forEach((a,index,f)=>{
//     console.log(`${a} and index is ${index} and thirs is ${f}`)
    
// })
// -----------------------------
//promises race
// let a = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve("hii it is first ")
//         // reject("it is give err")
//     },2000)
// })
// let b = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("hii it is second ")
//     },2000)
// })
// let c = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("hii it is third ")
//     },2000)
// })
// Promise.race([a,b,c]).then((data)=>{
//     console.log("all promised solved  ");
//     console.log(data)
    
// }).catch((err)=>console.log(err)
// )

// // -----------------
// //promises any
// let a = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve("hii it is first ")
//         reject("it is give err")
//     },2000)
// })
// let b = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve("hii it is second ")
//         reject("it is give e")
//     },2000)
// })
// let c = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("hii it is third ")
//     },2000)
// })
// Promise.any([a,b,c]).then((data)=>{
//     console.log("all promised solved  ");
//     console.log(data)
    
// }).catch((err)=>console.log(err)
// )
// ------------------------
// function dely(msg,time){
// return new Promise((resolve,reject)=>{
//    setTimeout(() => {
//     resolve(msg)
//    }, time);
// })
// }

// function seq(){
//     return dely("hii it is frist",2000).then((data)=>{
//         console.log(data);
//         return dely("this is second",3000)
//     }).then((data)=>{
//         console.log(data);
//         return dely("this is third",4000)
//     }).then((data)=>console.log(data)
//     )
// }
// seq();
// --------------------------------

// function dely(msg,time){
// return new Promise((resolve,reject)=>{
//    setTimeout(() => {
//     resolve(msg)
//    }, time);
// })
// }

// async function seq(){
   
//     try{
//         let result2= await dely("hii it is first",2000)
//         console.log(result2);
//     let result1 =await  dely("hii it is second",2000)
//         console.log(result1)
    
//     let result3  =  await dely("hii this is third",300)
//         console.log(result3)
//     }
//     catch(err){
//         console.error("err",err)
//     }
// }
// seq();
// // -----------------------------
// _____________________________________
// error handling
// console.log("hello");
// try {
//     throw new Error('my error');
    
//  } catch (err) {
//    console.error(err.message);
//  }
// -------------------
// try {
//     throw new Error('my error');
//  } finally {
//    console.error('finally');
//  }
// --------------

// try {
//     throw new Error('my error');
//  } catch (err) {
//    console.error(err.message);
//  } finally {
//    console.error('finally');
//  }

// ----------------------------
// function test(name,fun){
// console.log(`my name is the ${name}`);
// fun()
// }
// function val(){
//   console.log(` this is test`);
// }
// test("rohn",val)
// -----------------------------
// const obj = {
//   value : 10,
//   regi: function(){
//     console.log(this.value);
    
//   },
//   rei:()=>{
// console.log(this.value);

//   }
// }

// obj.regi();
// obj.rei()
// ----------------------------
// const api =`https://api.github.com/users/rohannimap`
// const user  = fetch(api)
// console.log(user);
// --------------------------------
// function find(){
//   return new Promise((resolve,reject)=>{
//     const api =`https://github.com/rohannimap/mywork`
// setTimeout(()=>{
//   const user  = fetch(api)
// resolve(user)
// reject("the error in the url")

// })
//   })
// }

// find().then((data)=>console.log(data)).catch((data)=>console.log(data)
// )
// -----------------
// const rad = [ 3,2,6,4]
// const a = rad.map((a)=>a*a)
// console.log(a);
//--------------
function a()
{
  for(var i = 0;i<=3;i++){
    setTimeout(()=>{
      console.log(i);
    })
  }
}

a()






