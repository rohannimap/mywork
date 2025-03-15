// function trafficLight(color) {
//     switch (color.toLowerCase()) {
//         case "red":
//             return "Stop!";
//         case "yellow":
//             return "Get Ready!";
//         case "green":
//             return "Go!";
//         default:
//             return "Invalid input";
//     }
// }

// console.log(trafficLight("green")); // Output: Go!
// console.log(trafficLight("red"));   // Output: Stop!
// console.log(trafficLight("blue"));  // Output: Invalid input

// -------------------------
// let chatHistory = [];

// function chatbot(input) {
//     chatHistory.push(input.toLowerCase());

//     if (input.includes("hello")) {
//         return "Hi there! How can I assist you?";
//     } else if (input.includes("bye")) {
//         return "Goodbye! Have a great day!";
//     } else {
//         return "I'm still learning. Can you rephrase?";
//     }
// }

// // console.log(chatbot("hello")); // Output: 
// // console.log(chatbot("bye"));   // Output: 
// console.log(chatbot("What is AI?")); // Output: 
// console.log(chatHistory); // Output: 
// -------------------

// function moveToGoal(current, goal) {
//     if (current < goal) {
//         return "Move Forward";
//     } else if (current > goal) {
//         return "Move Backward";
//     } else {
//         return "Goal Reached!";
//     }
// }
// console.log(moveToGoal(5, 10)); 
// console.log(moveToGoal(10, 10)); 
// console.log(moveToGoal(15, 10)); 
// ---------------------------------

// function recommendMovie(genre) {
//     const movies = {
//         action: "Mad Max: Fury Road",
//         comedy: "Superbad",
//         sciFi: "Interstellar",
//         horror: "The Conjuring"
//     };
    
//     return movies[genre.toLowerCase()] || "No recommendation available.";
// }
// // console.log(recommendMovie("sciFi")); 
// // console.log(recommendMovie("comedy")); 
// console.log(recommendMovie("drama")); 
// console.log(recommendMovie("horror")); 
// ------------------------------

// async function getData() {
//     let promise1 = new Promise((resolve) => setTimeout(() => resolve("Data 1"), 1000));
//     let promise2 = new Promise((resolve) => setTimeout(() => resolve("Data 2"), 2000));

//     let results = await Promise.all([promise1, promise2]);
//     console.log(results); 
// }

// getData();






