// var count = 0;

// function printCount() {
//     if (count === 0) {
//         console.log(count);  // 0 (global count)
//        var count = 10;          // Modify global count
//         console.log(count);  // 10 (global count updated)
//     }
// }

// printCount();

// console.log("1"+2+4);
// console.log(2+4+"1");
// console.log("1"+2-4);
// console.log(2-4+"1");

// let x = 3;
// const y = x++;
// x is 4; y is 3
// console.log(x,y);

// let x2 = 3n;
// const y2 = x2++;
// x2 is 4n; y2 is 3n
// console.log(x2,y2);

// let a = 10,b = 20;
// let c = null
// c=a;
// a=b;
// b=c
// console.log(a,b);




// let a = 10;
// let b = 12;

// console.log(`Before swap: a = ${a}, b = ${b}`);

// // Swap using array destructuring
// [a, b] = [b, a];

// console.log(`After swap: a = ${a}, b = ${b}`);


// let a = [1,2,4,3,5,8,7]
// // console.log(a)
// for(i of a){
//     console.log(i);
    
// }

// let obj = {
//     name:"rohan",
//     number : 123456,
//     ph:123
// }

// console.table(obj)
// for (i in obj ){
//     console.log(obj[i]);
    
// }


let obj  = {
    firstName: "jhon",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName:function(){
        return (this.firstName + " " + this.lastName).toUpperCase();
    }
}
let check = obj.fullName()
console.log(check)
