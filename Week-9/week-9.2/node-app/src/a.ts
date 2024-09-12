// const x: number = 1;
// console.log(x)


// function greet(firstName: string) {
//     console.log("Hello, " + firstName)
// }

// greet("javed")


// function sum(a: number, b: number): number {
//     return a + b;
// }

// const value = sum(9, 5)
// console.log(value)


// function isLegal(age: number, ): boolean {
//     return age > 18 ? true : false
// }

// isLegal(18)


// function printSomthing(fn: () => void): void { //this is the main function
//     setInterval(fn, 1000) 
// }
// printSomthing(function() { //this is the function
//     console.log("Hello Javed")
// })


// ------------------------- interface ----------------------------------------


// interface User {
//     firstName: string;
//     lastName: string;
//     age: number;
// }

// function isLegal(user: User) {
//     if(user.age > 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// isLegal({
//     firstName: "Javed",
//     lastName: "Akhtar",
//     age: 45
// })


// ------------------------------ types ----------------------------------

// type User = {
//     name: string
//     age: number
//     islegal?: boolean
// }

// function checkUser(user: User) {
//     if(user.age > 18) {
//         user.islegal = true;
//     } else {
//         user.islegal = false
//     }
// }

// checkUser({
//     name: "Javed Akhtar",
//     age: 45
// })


// ------------------------------ types (Unions) ----------------------------------

// type idArg = string | number
// function userId(id: idArg) {
//     console.log(`User I'd: ${id}`)
// }

// userId(12345)
// userId("12345")


// --------------------------------- Arrays in Ts ---------------------------------

// function maxValue(arr: number[]) {
//     let max = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max;
// }

// maxValue([3, 4, 1, 8])

// // Ex-2

// interface User {
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// }

// function filteredUsers(users: User[]) {
//     return users.filter(x => x.age >= 18);
// }

// console.log(filteredUsers([{
//     firstName: "harkirat",
//     lastName: "Singh",
//     age: 21
// }, {
//     firstName: "Raman",
//     lastName: "Singh",
//     age: 16
// }, ]));


// ---------------------------------- Enums -----------------------------------

// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }

// function doSomething(keyPressed: Direction) {
// 	if(keyPressed == Direction.Up) {
//         console.log(Direction.Up)
//         console.log("Up button pressed")
//     } else if(keyPressed == Direction.Down) {
//         console.log(Direction.Down)
//         console.log("Down button pressed")
//     } else if(keyPressed == Direction.Left) {
//         console.log(Direction.Left)
//         console.log("Left button pressed")
//     } else if(keyPressed == Direction.Right) {
//         console.log(Direction.Right)
//         console.log("Right button pressed")
//     }
// }

// doSomething(Direction.Up)
// doSomething(Direction.Left)

// xxxxxxxxxxxxxxxxxxx Common usecase in express xxxxxxxxxxxxxxxxxxxxxxxxx

// const express = require('express')
// const app = express()

// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get("/", (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })


// ---------------------------- Generics ----------------------------------

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase())