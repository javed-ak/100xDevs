interface User {
    name: String
    age: number
}

interface UserProp {
    readonly id: number
    name: string
    email: string
    age: number
    phone: number
    password: string
}

type updateProp = Pick<UserProp, 'email' | 'password'>

type updatePropOptional = Partial<updateProp>

function usersData(props: updatePropOptional) {
}

function sumOfAge(user1: User, user2: User) {
    const age = user1.age + user2.age;
    console.log(age);
}

sumOfAge({name: 'Javed', age: 21}, {name: 'Harkirat', age: 35})

usersData({email: 'javed@mail.com'})