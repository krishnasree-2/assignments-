const readline = require("readline");

// Create input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask user for countdown seconds
rl.question("Enter countdown seconds: ", (input) => {
  let timeLeft = Number(input);

  if (isNaN(timeLeft) || timeLeft <= 0) {
    console.log("Please enter a valid positive number.");
    rl.close();
    return;
  }

  console.log(`\nCountdown started from ${timeLeft} seconds...`);
  console.log(`Press "s" anytime to stop the countdown.\n`);

  // Start countdown timer
  const timer = setInterval(() => {
    console.log(`Time left: ${timeLeft}s`);
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);

  // Delay key detection slightly
  setTimeout(() => {
    process.stdin.on("data", (data) => {
      const key = data.toString().trim();

      if (key === "s" || key === "S") {
        clearInterval(timer);
        console.log("Countdown stopped by user!");
        rl.close();
      }
    });
  }, 300);
});
