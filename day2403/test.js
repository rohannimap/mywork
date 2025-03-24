// function s(str){
//  for(let b of str){
//     console.log(b);
    
// }
// }
// s("hello");
 
// -----------------
// function mostFrequentChar(str) {
//     let charCount = {};  // Object to store character counts
//     let maxChar = '';    
//     let maxCount = 0;    

//     for (let char of str) {
//         charCount[char] = (charCount[char] || 0) + 1; // Increment count
//         if (charCount[char] > maxCount) {
//             maxCount = charCount[char];  
//             maxChar = char;  
//         }
//     }

//     return maxChar;
// }

// console.log(mostFrequentChar("javascript"));  // Output: "a"
// console.log(mostFrequentChar("hello world")); // Output: "l"
// let charMap = {"a":1,"b":1,"c":1,"c":2};
// console.log(charMap["c"]);
// ----------------------*
// let myMap = new Map();

// // Adding key-value pairs
// myMap.set("name", "Alice");
// myMap.set(1, "One");
// myMap.set(true, "Boolean Key");

// console.log(myMap.get("name")); 
// console.log(myMap.has(1));      
// console.log(myMap.size);        
// myMap.forEach((value, key) => {
//     console.log(`${key}: ${value}`);
// });
// // -------------------------*
// let mySet = new Set();

// // Adding values
// mySet.add(1);
// mySet.add(2);
// mySet.add(2);  
// mySet.add("Hello");
// mySet.add({ a: 1 });

// console.log(mySet.has(1));  
// console.log(mySet.size);    

// // Iterating over a Set
// mySet.forEach(value => {
//     console.log(value);
// });
// ----------------------*