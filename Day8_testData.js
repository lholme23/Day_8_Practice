// Create the following arrays:

// testUsers → A list of three usernames (e.g., "qaUser1", "qaUser2", "adminUser").
// browsers → A list of browser names ("chromium", "firefox", "webkit").
// environments → A list of test environments ("staging", "uat", "production").

// ✅ Add one more item to each array using .push()
// ✅ Log each array’s length using .length
// ✅ Print a specific value from each array using its index

let testUsers = ["qaUser1", "qaUser2", "adminUser"];
let browsers = ["chromium", "firefox", "webkit"];
let environments = ["staging", "uat", "production"];

testUsers.push("NewUser1");
browsers.push("safari");
environments.push("dev");

console.log("Test Users Length:", testUsers.length);
console.log("Browsers:", browsers.length);
console.log("Environments:", environments.length);

console.log("Third User:", testUsers[2]);
console.log("First Browser:", browsers[0]);
console.log("Last Environment:", environments[3]);

let user1 = {
  username: "qaUser1",
  password: "test123",
  role: "tester",
  isActive: true
};

let user2 = {
  username: "qaUser2",
  password: "test321",
  role: "qa engineer",
  isActive: false
};

let user3 = {
  username: "adminuser",
  password: "admin123",
  role: "admin",
  isActive: true
};

let testConfig = {
  baseURL: "https://testsite.com",
  browsers: ["google chrome", "microsoft edge", "firefox"],
  credentials: {
    admin: { username: "adminuser", password: "admin123"  },
    standardUsers: [user1, user2, user3]
}
}

console.log("Second Browser:", testConfig.browsers [1]);
console.log("Admin Username:", testConfig.credentials.admin.username)
console.log("First Standard User's Username:", testConfig.credentials.standardUsers[0].username);