const countDisplay = document.getElementById("count");
    const incrementButton = document.getElementById("incrementButton");
    const decrementButton = document.getElementById("decrementButton");
    const resetButton = document.getElementById("resetButton");

    // Increment the counter
    incrementButton.addEventListener("click", () => {
      count++;
      countDisplay.textContent = count;
    });

    // Decrement the counter
    decrementButton.addEventListener("click", () => {
      if (count > 0) { // Prevent negative values
        count--;
        countDisplay.textContent = count;
      }
    });

    // Reset the counter
    resetButton.addEventListener("click", () => {
      count = 0;
      countDisplay.textContent = count;
    });