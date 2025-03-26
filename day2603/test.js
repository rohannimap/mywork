// You have one array of even length eg [ 1, 1, 2, 3, 5, 7, 7, 4] and 
// you have to divide this array into two different array of half length such 
// that both arrays should have distinct elements.
// We can convert above array into [1, 2, 3, 7] and [ 1, 5, 7, 4] 
// so return true if we can do that else return false.
// function splitIntoDistinctHalves(arr) {
//     let freq = new Map();
//     let halfSize = arr.length / 2;
//     let set1 = new Set();
//     let set2 = new Set();

//     // Count occurrences of each element
//     for (let num of arr) {
//         freq.set(num, (freq.get(num) || 0) + 1);
//     }

//     let uniqueNumbers = [...freq.keys()];

//     // Try to distribute unique numbers into two sets
//     for (let num of uniqueNumbers) {
//         if (set1.size < halfSize) {
//             set1.add(num);
//         } else {
//             set2.add(num);
//         }
//     }

//     // If successfully split into two equal halves
//     if (set1.size === halfSize && set2.size === halfSize) {
//         return [Array.from(set1), Array.from(set2)];
//     } else {
//         return false; // Cannot split properly
//     }
// }

// // Test Case
// console.log(splitIntoDistinctHalves([1, 1, 2, 3, 5, 7, 7, 4])); 
// -----------------------------


const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
console.log(person.fullName.call(person1, "Oslo", "Norway"));
//   person.fullName.call(person1, "Oslo", "Norway");





