/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, n * 1000);
    });
}

module.exports = wait;

// Example usage:
wait(3).then(() => {
    console.log('3 seconds have passed');
});
