let testUsers = [
  { username: "qaUser1", role: "tester", isActive: true },
  { username: "qaUser2", role: "tester", isActive: false },
  { username: "adminUser", role: "admin", isActive: true },
];

let testConfig = {
  baseUrl: "https://roadtoqa.test",
  browsers: ["chromium", "firefox", "webkit"],
  environments: ["staging", "uat", "production"],
  defaultEnv: "staging"
};