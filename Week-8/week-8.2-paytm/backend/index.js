const express = require("express");
const rootRouter = require("./routes/index")

const App = express()

app.use("/api/v1", rootRouter);
