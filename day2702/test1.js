// const arr1 = ["1" , 2,3]
// console.log(arr1[0]);
// console.log(typeof(arr1[0]));

// const arr2 = new Array(6,7,8,9)
// arr2.push(2)   //add element 
// arr2.push(3)   //add element 
// arr2.pop()
// arr2.unshift(0)
// const testJoin = arr2.join();

// console.log( arr2);
// console.log(typeof  testJoin);
// console.log(arr2.includes(7));
// console.log(arr2.indexOf(9));

// slice not include last index  like slice(1,3)
// splice include last index but it manupulate the main arry

// let a1 = [1,2,3,4,5]
// let a2 = [6,7,8,9,10,11]

// // a1.push(a2)
// // let a3 = a1.concat(a2)
// let a4 = [...a1,...a2]   // it work like concat and most preferable
// //flat(infinit)  use to in arry in if there is multiple sub arry in element then it make arry to separable element
// // from use to make string to arr by sapreate element 
// console.log(Array.from("rohan"));
// let q1 = "test";
// let q2 = "demo";
// let q3 = "check";
// console.log(Array.of(q1,q2,q3));  // of is use to multile variable data will be add in arry

// console.log(a4);
// // console.log(a1);
// // console.log(a1[5]);
// // console.log(a1[5][2]);

//singleton
// object literals

// const myKey = Symbol("mykeyUse");
// let persion ={
//     name :"rohan",
//     "surname" : "hakke",
//     phoneNumber : 123345,
//    // myKey :  "mykeyUse"  // it not use symbol it type is the string
//    [myKey] : "mykeyUse" 
// }
// console.log(persion.name);
// console.log(persion);
// Object.freeze(persion.phoneNumber)  // it freez the that element not change by add new date or change in the that elemnt

// //console.log(persion.myKey); // it not give like thT FOR THt USE [ ]
// console.log(persion[myKey]);


// let testObj = {}

// testObj.name = "abc"
// testObj.pnNumber = 1234
// testObj.gmail = "rohanhakke@gmail.com"

// console.log(testObj);

// let obj1 = {1:"a",2:"b"}
// let obj2 = {3:"c",4:"d"}

// let obj3 = Object.assign({},obj1,obj2)    // combine the multiple object in that giveung the {} is the good pratice
// console.log(obj3);

// let sum = (a,b)=>{
//     var c =1
//     console.log(c);
//     return (a+b)   ;
// }
// console.log(sum(5,8));


// let x = 5;
// function test() {
//     console.log(x);
//     let x = 10;
// }
// test();


// const obj = { a: 1, b: 2 };
// const { a, b } = obj;
// console.log(a, b);

// let arr = [1, 2, 3];
// arr.forEach((num, idx) => {
//     if (idx === 1) return;
//     console.log(num);
// });

// let testSet = new Map();

// testSet.set("a",1)
// testSet.set("b",2)
// testSet.set("c",3)
// testSet.set("d",1)
// console.log(testSet);

// let sqrt = (a) => Math.sqrt(a)
// console.log(sqrt(4));
 
// function starPath(){
    
//     for(let i = 0;i<5;i++){
//         let star = " "
//         for(let j = 0;j<5;j++){
//             star+="*"
//         }
//         console.log(star)
//     }
// }

// starPath();

// for(let i =1;i<11;i++){
//     console.log(i);
// }

// function primeNo(n){
//     let a =[]
//     for(let i=1;i<=n;i++){
//     //    console.log(i);
//                 for(let j = 2;j*j<=i;j++){
//                     if(i%j==0){
//                         break;

//                     }
//                 }
//                 console.log(i);
//                 if
           
//         }
//     }
// primeNo(5)


// let sumA =1
// function sum(n){
//     for(let i = n;i >=1;i--){
//         sumA*=i
//     }
//     console.log(sumA);
// }
// sum(5)
    
function resStr(a){
        let res = "";
        for(let i = a.length-1;i>=0;i--){
            res+=a[i];
        }
        return res;
}






console.log(resStr("hello"));
