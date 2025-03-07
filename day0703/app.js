// let a = null;
// console.log(a);


//object 
// let persion = {
//     name:"rohan,",
//     pnNumber:1234,
//     aaddress:"solapur"
// }

// console.log(persion.aaddress);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
//     persion: {
//             name:"rohan,",
//             pnNumber:1234,
//             aaddress:"solapur"
//         }
//   };
//   console.table(person);
//     delete person.age;  //delete person["age"];
//   console.table(person);

// console.log(typeof person.persion);
// console.log(typeof person);

// let p1 = "myCars";
// let p2 = "car2";
// person[p1][p2];
// console.table(person);

// var a = 10;
// function test(b){
//     let a = 20
//     console.log(a);
        
// }S
// test(a)

// const cars = [
//     "Saab",
//     "Volvo",
//     "BMW"
//   ];
//   console.table(cars);
// const cars = new Array("Saab", "Volvo", "BMW"); 
// console.log(cars);
// //   console.log(cars.toString());

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // let fruit = fruits.at(2);

// console.log(fruits[2]); ///console.log(fruits.at(2));
// console.log(fruits.indexOf("orange"));
// console.log(fruits.includes("Mango"));


// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);
// // console.log(numbers2);

// function myFunction(value, index, array) {
//     console.log(value,index,array);
    
//   return value * 2;
// }

// You can create a constant array:
// const cars = ["Saab", "Volvo", "BMW"];

// // You can change an element:
// cars[0] = "Toyota";

// // You can add an element:
// cars.push("Audi");



//MAP
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200],
//   ]);
//   console.log(fruits);
//   fruits.set("mango",600)  
//   console.log(fruits);
//   console.log(fruits.get("mango"));
// console.log(typeof fruits);
// console.log(fruits instanceof Map);

// Map.get()
// Map.set()
// Map.size
// Map.delete()
// Map.clear()
// Map.has()
// Map.forEach()

// console.log(fruits.size);
// console.log(fruits.delete("apples"));
// console.log(fruits.has("apples"));

// this
// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return (this.firstName + " " + this.lastName);
//     }
//   };
// console.log(person.fullName());



// callbacks
// function greet(name, test) {
//     console.log('Hello, ' + name + '!');
//     test();
// }

// function sayGoodbye() {
//     console.log('Goodbye!');
// }

// greet('rohan', sayGoodbye);


// function fetchData(demo) {
//     setTimeout(() => {
//         console.log('Data fetched!');
//         demo();
//     }, 2000); // Simulate a delay of 2 seconds
// }

// function processData() {
//     console.log('Processing data...');
// }

// fetchData(processData);




const numbers = [1, 2, 3, 4, 5];

// Using `forEach()` with a callback to log each number
numbers.forEach(function(num) {
    console.log(num);
});

// Using `map()` with a callback to square each number
const squared = numbers.map(function(num) {
    return num * num;
});
console.log(squared);
