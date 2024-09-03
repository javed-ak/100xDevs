const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:adminkapassword@cluster0.yojdofd.mongodb.net/paytm')

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
})

const User = mongoose.model("User", userSchema)

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);

module.exports = {
    User,
    Account
}