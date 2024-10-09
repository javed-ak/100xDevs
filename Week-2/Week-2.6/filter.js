const arr = [1, 2, 3, 4, 5];

const evenArr = arr.filter((n) => {
    if(n % 2 == 0) {
        return true;
    } else {
        return false;
    }
})

console.log(evenArr)