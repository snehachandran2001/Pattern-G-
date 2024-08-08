function printG() {
  let size = 7; // Size of the 'G'
  let pattern = ''; // This will hold the final pattern

  // Loop through each row
  for (let i = 0; i < size; i++) {
      // Loop through each column in the current row
      for (let j = 0; j < size; j++) {
          // Check if we are on the top horizontal line of 'G'
          if (i === 0 && j > 0 && j < size - 1) {
              pattern += '*';
          }
          // Check if we are on the bottom horizontal line of 'G'
          else if (i === size - 1 && j > 0 && j < size - 1) {
              pattern += '*';
          }
          // Check if we are on the left vertical line of 'G'
          else if (j === 0 && i > 0 && i < size - 1) {
              pattern += '*';
          }
          // Check if we are on the middle horizontal line of 'G'
          else if (i === Math.floor(size / 2) && j >= Math.floor(size / 2)) {
              pattern += '*';
          }
          // Check if we are on the right vertical line at the bottom half of 'G'
          else if (j === size - 1 && i >= Math.floor(size / 2) && i < size - 1) {
              pattern += '*';
          }
          // For all other positions, add a space
          else {
              pattern += ' ';
          }
      }
      // Add a newline after each row
      pattern += '\n';
  }

  // Output the pattern to the console
  console.log(pattern);
}

// Call the function to print the 'G'
printG();
