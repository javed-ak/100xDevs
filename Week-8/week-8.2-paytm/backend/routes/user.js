const express = require('express')
const zod = require('zod');
const { User } = require('../db');
const JWT_SECRET = require('../config');
const router = express.Router;

const app = express()

const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

router.post("/signup", async (req, res) => {
    const { success } = signupSchema.safeParse(req.body) 
    if(!success) {
        return res.status(401).json({
            msg: "Incorrect Input"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if(existingUser){
        return res.status(411).json({
            msg: "Email already taken"
        })
    }

    const user = await User.create(body)

    const userId = user._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET)

    res.json({
        msg: "User Created Successfully",
        token: token
    })
})

const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

router.post("/signin", async (req, res) => {
    const { success } = signinSchema.safeParse(req.body)

    if(!success) {
        return json({
            msg: "Incorrect Input"
        })
    }
    const user = await User.findOne({
        username: body.username,
        password: body.password
    });

    if(user){
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET)

        res.json({
            token: token
        })
        return
    }

    res.json({
        msg: "Error while logging in"
    })
})

const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

		await User.updateOne({ _id: req.userId }, req.body);
	
    res.json({
        message: "Updated successfully"
    })
})

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router;