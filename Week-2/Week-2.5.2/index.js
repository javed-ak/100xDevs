const express = require("express");
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}]

app.use(express.json())

app.get("/", (req, res) => {
    const johnKidney = users[0].kidneys;
    const numberOfKidneys = johnKidney.length;
    let numberOfHealthyKidneys = 0;

    for( let i = 0; i < numberOfKidneys; i++ ) {
        if(johnKidney[i].healthy) {
            numberOfHealthyKidneys += 1;
        }
    }
    
    const numberofUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.send({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberofUnhealthyKidneys
    })
})

app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.send("Updated")
})

app.put("/", (req, res) => {
    if(isThereAnyUnheathyKidney()) {
        for( let i = 0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy = true;
        }
        res.json("All kidneys are updated to healthy")
    } else {
        res.json("All are Healthy")
    }
})

app.delete("/", (req, res) => {
    newKidneys = []
    if(isThereAnyUnheathyKidney()){
        for( let i = 0; i < users[0].kidneys.length; i++) {
            if(users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
            users[0].kidneys = newKidneys;
            res.json("All unhealthy kidneys are removed")
        }
    } else {
        res.json("There is No unhealthy Kidneys")
    }

})

function isThereAnyUnheathyKidney() {
    let isUnhealthyKidney = false
    for( let i = 0; i < users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy) {
            isUnhealthyKidney = true
        }
    }
    return isUnhealthyKidney;
}
app.listen(3001)