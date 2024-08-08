function printGPattern(rows) {
    let pattern = '';

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            if (
                i === 0 || // Top horizontal line
                j === 0 || // Left vertical line
                (i === rows - 1 && j <= rows / 2) || // Bottom horizontal line part
                (j === rows / 2 && i >= rows / 2) || // Middle vertical line
                (i === rows / 2 && j >= rows / 2) // Middle horizontal line
            ) {
                pattern += '*';
            } else {
                pattern += ' ';
            }
        }
        pattern += '\n';
    }

    console.log(pattern);
}

// Example usage:
printGPattern(7);
