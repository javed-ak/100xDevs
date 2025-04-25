// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send("Hii there, This the home page. And you're most welcome here")
// })

// app.get('/about', (req, res) => {
//     res.send("Javed is a passionate Full-stack Developer with expertise in MERN Stack Development.")
// })

// app.listen(3000);

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     setTimeout(() => {
//         res.send("This is after 5 sec")
//     }, 5000);
//     res.send("Hii there Javed")
// })

// app.listen(3000)

// const express = require('express');
// const app = express();



// const getSum = (input) => {
//     let sum = 0;
//     for(let i=0; i<input; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }

// app.get('/', (req, res) => {
//     const a = req.query.a;
//     const totalSum = getSum(a);
//     res.send("Totol sum of the number you given is "+ totalSum)
// })
// app.listen(3000)



// const input = [1,2,3,4,5];
// let output = [];

// for (let i = 0; i<input.length; i ++){
//     output.push(input[i]*2);
// }
// console.log(output);

const input  = [1, 2, 3, 4, 5];

const multiplyByTwo = (e) => {
}

const ans = input.map((e) => {
    let multiply = e * 2;
    return multiply;
})

const filterEven = input.filter((e) => {
    if(e % 2 == 0) {
        return e
    }
})

console.log(filterEven);
console.log(ans);