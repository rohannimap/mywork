// console.log("helo")
// const car = {type:"Fiat", model:"500", color:"white"};
// console.log(car[]);

//object 
let person = {
    name: "Alice",
    age: 30,
    isStudent: false
  };

  let colors = ["red", "green", "blue"];
//   function fetchData(callback) {
//   setTimeout(() => {
//     const data = { id: 1, name: "Alice" };
//     callback(data); // Call the callback function with the data
//   }, 2000); // Simulate a 2-second delay
// }

// fetchData((data) => {
//   console.log("Data received:", data); // This will run after 2 seconds
// });


function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, name: "Alice" };
        resolve(data); // Resolve the promise with the data
        // reject("Error fetching data"); // Uncomment to simulate an error
      }, 2000);
    });
  }
  
  fetchData()
    .then((data) => {
      console.log("Data received:", data); // This will run after 2 seconds
    })
    .catch((error) => {
      console.error(error); // Handle any errors
    });