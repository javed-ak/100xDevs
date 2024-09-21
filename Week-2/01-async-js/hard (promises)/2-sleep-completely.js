/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve) => {
        
    })
}

module.exports = sleep;

function busyWait(ms) {
    return new Promise((resolve) => {
        const start = Date.now();
        // Busy-wait loop
        while (Date.now() - start < ms) {
            // This loop does nothing but keep the CPU busy
        }
        resolve();
    });
}

// Example usage:
busyWait(3000).then(() => {
    console.log('3 seconds have passed');
});
