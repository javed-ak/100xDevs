// Assignment 1

let countDown = 30;
let timerId = setInterval(countdown, 1000);
    
function countdown() {
    if (countDown == -1) {
        console.log("Time's Up")
        clearTimeout(timerId);
    } else {
        console.clear();
        console.log(countDown);
        countDown--;
    }
}

// // Assignment 2

// // Record the start time when setTimeout is called
// const startTime = Date.now();

// setTimeout(() => {
//   // Record the time when the function runs
//   const endTime = Date.now();

//   // Calculate the actual delay
//   const actualDelay = endTime - startTime;

//   console.log(`Actual delay was: ${actualDelay}ms`);
// }, 1000);  // The expected delay is 1000ms (1 second)


// Assignment 3

// function displayClock() {
//     // Get the current time
//     const now = new Date();
  
//     // Extract hours, minutes, and seconds
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');
  
//     // Clear the terminal and display the time
//     console.clear();
//     console.log(`${hours}:${minutes}:${seconds}`);
//   }
  
//   // Update the clock every second
//   setInterval(displayClock, 1000);
  
//   // Call the function initially to show the clock immediately
//   displayClock();
  
