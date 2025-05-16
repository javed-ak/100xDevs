interface User {
    name: string,
    age: number
}

function isLegal(user: User) {
    if(user.age > 18) {
        return true;
    } else {
        return false;
    }
}

isLegal({
    name: "javed",
    age: 34
})