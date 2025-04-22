// var fname = "Javed";
// let lname = " Akhtar";
// const gender = 'male';
// const isMarried = false

// if(gender == 'male') {
//     console.log("Hello, Mr. " + fname)
// } else {
//     console.log("Hello, Ms. " + fname)
// }
// console.log("Have a nice day, " + fname + lname)

// for(let i=0; i<100; i++) {
//     console.log('This is ' + parseInt(i+1))
// }

// if(isMarried) {
//     console.log(fname + " is Married.")
// } else {
//     console.log(fname + " is not Married.")
// }

// var largestNumber
// let array = [45, 23, 20, 140, 33, 46, 69, 100, 200];
// for( let i = 0; i<array.length; i++) {
//     if(array[i] % 2 == 0 ){
//         console.log(array[i]);
//     }
// }
// for(let i = 0; i < array.length; i++) {
//     for(let j = 0; j< array.length; j++) {
//         if(array[i] < array[j]){
//             largestNumber = array[j]
//         }
//     }
// }
// console.log("Largest number is " + largestNumber)

// const users = [{
//     firstName: "Javed",
//     gender: "Male",
//     metadata: {
//         age: 23
//     }
// }, {
//     firstName: "Harkirat",
//     gender: "Male",
//     metadata: {
//         age: 39
//     }
// }, {
//     firstName: "Kirat",
//     gender: "Male",
//     metadata: {
//         age: 17
//     }
// }, {
//     firstName: "Priya",
//     gender: "female",
//     metadata: {
//         age: 27
//     }
// }]

// for (let i = 0; i<users.length; i++) {
//     if(users[i]["gender"] == "Male" && users[i]["metadata"]["age"] > 18) {
//         console.log(users[i]["firstName"])
//     }
// }

// function sum (a, b) {
//     let value = a + b;
//     return value;
// }

// function displayResult( a, b, fn ) {
//     let value = fn(a, b)
//     console.log("Result of the sum is " + value);
// }

// function displayPassiveResult (data) {
//     console.log("Sum's result is " + data)
// }

// const sumValue = displayResult(4 , 5, sum);

const currentDate = new Date();

console.log(currentDate.getDate());
console.log(currentDate.getFullYear());