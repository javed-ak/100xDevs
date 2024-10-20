import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// interface User {
//     username: string
//     password: string
//     firstName: string
//     lastName: string
// }

const insertUser = async (username: string, password: string, firstName: string, lastName: string) => {
    const resposnse = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName
        }
    })
}

const createTodo = async () => {
    const resposne = await prisma.todo.create({
        data: {
            user_Id: 1,
            title: "This is your First Todo",
            description: "Complete your first Todo"
        }
    })
    console.log(resposne)
}

const getTodos = async (userId: number) => {
    const resposne = await prisma.todo.findMany({
        where: {user_Id: userId}
    })
    console.log(resposne);
}

const getTodosWithUserDetails = async (userId: number) => {
    const resposne = await prisma.todo.findMany({
        where: {user_Id: userId},
        select: {
            user: true,
            title: true,
            description: true
        }
    })
    // const userDetail = await prisma.user.findMany({
    //     where: {id: userId}
    // })
    // console.log(userDetail);
    console.log(resposne)
}

// insertUser('javed', 'javed123', 'Javed', 'Akhtar')
// createTodo();
// getTodos(1)
getTodosWithUserDetails(1);