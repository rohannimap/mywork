// console.log("Start"); //  Synchronous

// setTimeout(() => {
//     console.log("Timeout Callback"); // Executes after 2 sec
// }, 2000);

// Promise.resolve().then(() => console.log("Promise Resolved")); //  Microtask

// console.log("End"); //  Synchronous

// ------------------------------


function outerFunction() {
    let count = 0; 
        console.log("outer",count);
        
    return function innerFunction() {
        count++;
        console.log(`Count: ${count}`);
    };
}

const counter = outerFunction();
counter(); 
counter(); 
counter(); 
counter(); 
counter(); 
counter(); 
