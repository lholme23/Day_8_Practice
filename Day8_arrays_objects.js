// const test = require("node:test");

// let groceryList = ["Eggs", "Milk", "Bread"]

// console.log(groceryList[0]);
// console.log(groceryList.length);

// let testUsers = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Admin User'];
// let testPasswords = ['password123', 'qwerty', 'letmein', 'admin2026'];

// //push method adds an item to the end of an array
// //unshift method adds an item to the beginning of an array
// //slice method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// //includes method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// testUsers.push("New User");
// console.log(testUsers);
//  testUsers.unshift("First User");

// console.log(testUsers);

//OBJECTS
// let card = {
//     phone : "708-769-4727",
//     fname: "Latrice",
//     email: "lholme23@gmail.com",
// }
// console.log(card.fname);

let testUser1 = {
  username: "JohnDoe",
  password: "test123",
  email: "john@example.com",
  role: "admin",
  isActive: true
};

console.log(testUser1.username); // JohnDoe
console.log(testUser1.isActive); // true

//Object and Array combined
let testConfig = {
  baseUrl: "https://testapp.com",
  browsers: ["chromium", "firefox", "webkit"],
  credentials: {
    admin: { username: "uAdmin", password: "admin123" }
  }
};

console.log(testConfig.browsers[1]); // firefox
console.log(testConfig.credentials.admin.username); // uAdmin