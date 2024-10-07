const express = require("express")

const app = express();

function sum(n) {
    let ans = 0;
    for( let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}

app.get("/", (req, res) => {
    const n = req.query.n;
    const ans = sum(n);
    res.send("Hii, Your answer is " + ans)
})

app.listen(3000)