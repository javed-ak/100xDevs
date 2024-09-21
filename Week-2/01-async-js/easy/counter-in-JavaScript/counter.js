let count = 0;

function updateCounter() {
    document.getElementById('counter').innerText = count;
    //document.write(count);
}

function increment() {
    count++;
    updateCounter();
}

function decrement() {
    count--;
    updateCounter();
}
