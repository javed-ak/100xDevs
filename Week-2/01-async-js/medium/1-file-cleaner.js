// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');
//const path = require('path');

// Define the file path using __dirname to ensure it's relative to the script's location
//const filePath = path.join(__dirname, 'example.txt');

// Read the file content
fs.readFile('text.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Remove extra spaces
    const cleanedContent = data.replace(/\s+/g, ' ').trim();

    // Write the cleaned content back to the file
    fs.writeFile('text.txt', cleanedContent, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
            return;
        }
        console.log('File has been cleaned and written successfully.');
    });
});

