// try{
//     console.log(a);
    
// }catch(err){
//     console.dir("this is the error ocured in mhy program",err)
    
// }
// console.log(2+4);
// ----------------------------------
// let name = "rohan"
// console.log(name.length);
// console.log(name.charAt(0));
// console.log(typeof name.charAt(4));
// console.log(name.toUpperCase())
// ----------------------------------------
// let arr =[2,3,5,1,6,8]
// let a =arr[0]
// for(let i  = 1;i < arr.length;i++){
//     if(a<arr[i]){
//             a=arr[i]
//     }
// }
// console.log(a);
// ---------------------
// let arr =[2,3,5,1,6,8]
// let a =0;
// for(let i  = 1;i < arr.length;i++){
//    a+=arr[i]
// }
// console.log(a);
// -------------------------------
// let arr =[2,3,5,1,6,8]
// let a = arr.sort()
// console.log(a[1]);

// let a = [
//     {
//         name:"jello",
//         age:10
//     },
//     {
//         name:"hello",
//         age:15
//     },
//     {
//         name:"sachin",
//         age:14
//     },
//     {
//         name:"more",
//         age:12
//     },
//     {
//         name:"aore",
//         age:12
//     }
// ]
// // console.log(a.sort((a,b)=>a-b));
// console.log(a.sort((a,b)=>b-a));
// arr.sort()
// console.log(a.sort((a,b)=>{
//    if(a['name'] < b['name']){
//     return 1
//    }
//    if(a['name'] > b['name']){
//     return -1
//    }
//    return 0
// }));
//  -----------------------------------
// let a = ["a","z","d","c"]
//  console.log(a.sort());
// ---------------------
// let a = [1,2,3,4,5]

// let t  =a.reduce((a,n)=>a+n,0)
// console.log(t);
// ----------------------------------------
// let result = 10 / 0;
//     console.log(result);
// -------------
try {
    console.log("Trying...");
    throw new Error("Something went wrong");
} catch (error) {
    console.log("Caught Error:", error.message);
} finally {
    console.log("This will always execute.");
}













