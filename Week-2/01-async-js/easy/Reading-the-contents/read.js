const fs = require('fs');

//const filePath = 'read.txt'; // Path to your file

fs.readFile('read.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File contents:');
    console.log(data);
});
console.log("'fs' module is an async module due to this I'm able to tell about this module before the file data has been get.")