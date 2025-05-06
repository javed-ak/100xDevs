// const express = require("express");
// const app = express();

// // Middleware to measure time taken
// app.use((req, res, next) => {
//   const start = Date.now();

//   res.on("finish", () => {
//     const duration = Date.now() - start;
//     console.log(`${req.method} ${req.url} - ${duration}ms`);
//   });

//   next();
// });

// // Sample route
// app.get("/", (req, res) => {
//   setTimeout(() => {
//     res.send("Hello World!");
//   }, 500); // Simulate some processing delay
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });


const express = require('express');
const app = express();
let numberOfRequest = 0;
const calculateRequestTime = () => {
    const start = Date.now();

}

app.get('/', (req, res) => {
    
    const start = Date.now();
    numberOfRequest++;
    res.send("No. of Request:" + numberOfRequest)
    const duration = Date.now() - start;
    console.log(duration)
})

app.listen(3000);
