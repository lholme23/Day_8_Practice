// Step 1: Select Elements
const textBox = document.getElementById("textBox");
const clickBox = document.getElementById("clickBox");
const hoverBox = document.getElementById("hoverBox");
const doubleBox = document.getElementById("doubleBox");
const resetBtn = document.getElementById("resetBtn");
const simulateBtn = document.getElementById("simulateBtn");
const log = document.getElementById("log");
const submitBtn = document.getElementById("submitBtn");

// Utility function to log events
function logEvent(message) {
  const entry = document.createElement("div");
  entry.textContent = message;
  log.appendChild(entry);
  log.scrollTop = log.scrollHeight;
};

//Username Input
textBox.addEventListener("keydown", (event) => {
    logEvent(`Key Pressed: ${event.key}`);
});

// Step 2: Handle Click
let clickCount = 0;
clickBox.addEventListener("click", () => {
  clickCount++;
  clickBox.style.backgroundColor = "#9be7ff";
  clickBox.textContent = `Clicked ${clickCount}`;
  logEvent(`Clicked box ${clickCount} time(s)`);
});

// Step 3: Handle Hover (mouseenter + mouseleave)
hoverBox.addEventListener("mouseenter", () => {
  hoverBox.style.backgroundColor = "yellow";
  hoverBox.textContent = "Hovered!";
  logEvent("Mouse entered hover box");
});
hoverBox.addEventListener("mouseleave", () => {
  hoverBox.style.backgroundColor = "lightgray";
  hoverBox.textContent = "Hover Me";
  logEvent("Mouse left hover box");
});

// Step 4: Handle Double Click
doubleBox.addEventListener("dblclick", () => {
  doubleBox.style.backgroundColor = "lightgreen";
  doubleBox.textContent = "Double Clicked!";
  logEvent("Double click detected on doubleBox");
});

// Step 5: Reset Button
resetBtn.addEventListener("click", () => {
  clickCount = 0;
  clickBox.style.backgroundColor = hoverBox.style.backgroundColor = doubleBox.style.backgroundColor = "lightgray";
  clickBox.textContent = "Click Me";
  hoverBox.textContent = "Hover Me";
  doubleBox.textContent = "Double Click Me";
  log.innerHTML = "";
  logEvent("Reset all boxes and logs");
});

//Submit Button
submitBtn.addEventListener("click", () => {
    logEvent("Form submitted successfully!");
})


// Step 6: Simulate Events Programmatically
simulateBtn.addEventListener("click", () => {
  logEvent("Simulating click + hover + dblclick...");
  clickBox.click();
  hoverBox.dispatchEvent(new Event("mouseenter"));
  hoverBox.dispatchEvent(new Event("mouseleave"));
  doubleBox.dispatchEvent(new Event("dblclick"));
  textBox.dispatchEvent(new Event("keydown"));
  submitBtn.dispatchEvent(new Event("click"));
  logEvent("Simulation complete ✅");
});

console.log(textBox);