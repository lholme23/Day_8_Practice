//Step 1. Define test users
const testUsers = [
  { username: "testUser1", role: "QA Analyst", isActive: true },
  { username: "testUser2", role: "QA Engineer", isActive: false },
  { username: "testUser3", role: "QA Manager", isActive: true },
  { username: "testUser4", role: "Manual Tester", isActive: true}
];

//Step 2. Create test configuration
const testConfig = {
  baseUrl: "https://roadtoqa.test",
  browsers: ["chromium", "firefox", "webkit"],
  environments: ["staging", "uat", "production"],
  defaultEnv: "staging",

 // Bonus Step 6: Summary method
 
  summary: function () {
    const activeCount = testUsers.filter(u => u.isActive).length;
    console.log(`Base URL: ${this.baseUrl}`);
    console.log(`Environments Available: ${this.environments.join(", ")}`);
    console.log(`Total Active Users: ${activeCount}`);
  }
};

//Step 3: Display Active Users

console.log("Returning Active Users")
testUsers.forEach(user => {
  if (user.isActive) {
  console.log(`Active User: ${user.username} - (Role: ${user.role})`);
  }
});

//Step 4: Conditional for environment check

if (testConfig.defaultEnv === "production") {
  console.log("⚠️ You are running tests in production!");
} else {
  console.log("✅ Safe to run tests in staging or UAT environment.");
}

//Step 5: Loop through browsers

console.log("===BROWSER TESTING===");
for (let browser of testConfig.browsers) {
  console.log(`Running test on: ${browser}`);
}
 
//Step 6: Run Summary

console.log("=== TEST CONFIG SUMMARY ===");
testConfig.summary();



