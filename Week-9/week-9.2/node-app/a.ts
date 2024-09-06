// const x: number = 1;
// console.log(x)


// function greet(firstName: string) {
//     console.log("Hello, " + firstName)
// }

// greet("javed")


// function add(a: number, b: number): number {
//     return a + b;
// }

// const value = add(9, 5)
// console.log(value)


// function isLegal(age: number, ): boolean {
//     return age > 18 ? true : false
// }

// isLegal(18)


function printSomthing(fn: () => void): void {
    setInterval(fn, 1000) 
}
printSomthing(function() {
    console.log("Hello Javed")
})