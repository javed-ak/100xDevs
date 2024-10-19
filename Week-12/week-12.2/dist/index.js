"use strict";
function sumOfAge(user1, user2) {
    const age = user1.age + user2.age;
    console.log(age);
}
sumOfAge({
    name: 'Javed',
    age: 21
}, {
    name: 'Harkirat',
    age: 35
});
