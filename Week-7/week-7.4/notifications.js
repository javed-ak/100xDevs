const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/notifications', (req, res) => {
    res.json({
        network: 45,
        job: 0,
        message: 10,
        appNotification: 110
    })
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})