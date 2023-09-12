// Global counter variable
let counter = 0;

// Function to increment the counter
function increment() {
  counter++;
  document.getElementById("counter").innerHTML = counter;
  document.getElementById("counterLogs").innerHTML =
    "The counter has been increased by 1";
}

// Function to decrement the counter
function decrement() {
  counter--;
  document.getElementById("counter").innerHTML = counter;
  document.getElementById("counterLogs").innerHTML =
    "The counter has been decreased by 1";
}

// Function to reset the counter
function reset() {
  counter = 0;
  document.getElementById("counter").innerHTML = counter;
  document.getElementById("counterLogs").innerHTML =
    "The counter has been reset";
}

//Extracting the value of counter into the integer
counter = parseInt(document.getElementById("counter").innerHTML);
