function squareRoot(number) {
    if (number < 0) {
        throw new Error("Cannot calculate the square root of a negative number.");
    }
    if (number === 0 || number === 1) {
        return number; // The square root of 0 is 0, and the square root of 1 is 1.
    }

    let guess = number / 2; // Initial guess
    let epsilon = 0.00001; // Precision level

    while (Math.abs(guess * guess - number) > epsilon) {
        guess = (guess + number / guess) / 2; // Update guess
    }

    return guess;
}

// Example usage:
console.log(squareRoot(25)); // Output: 5
console.log(squareRoot(2));  // Output: approximately 1.41421
console.log(squareRoot(0));  // Output: 0
console.log(squareRoot(1));  // Output: 1
console.log(squareRoot(45));  // Output: 1