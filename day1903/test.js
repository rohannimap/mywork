// finding missing arry Element
function findMissingNumber(arr) {
    let n = arr.length + 1; // Because one number is missing
    let expectedSum = (n * (n + 1)) / 2;
    
    let actualSum = 0;
    for (let num of arr) {
        actualSum += num; // Adding each number in the array
    }
    
    return expectedSum - actualSum;
}

// Example Usage
console.log(findMissingNumber([1, 2,4, 5, 6])); // Output: 3
// console.log(findMissingNumber([1, 3, 4, 5]));   // Output: 2
