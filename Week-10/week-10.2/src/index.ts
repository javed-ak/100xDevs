import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//   const res = await prisma.user.create({
//     data: {
//         email: username,
//         password,
//         firstName,
//         lastName
//     }
//   })
//   console.log(res);
// }

// insertUser("admin2", "123456", "Harki", "Singh")


// interface UpdateParams {
//     firstName: string;
//     lastName: string;
// }

// async function updateUser(userId: number, {
//     firstName,
//     lastName
// }: UpdateParams) {
//     const res = await prisma.user.update({
//     where: { id: userId },
//     data: {
//         firstName,
//         lastName
//     }
//   })
//   console.log(res)
// }

// updateUser(2, {
//     firstName: 'Harkirat', 
//     lastName: 'Singh'
// })


async function getUser(username: string) {
    const user = await prisma.user.findFirst({
        where: {email: username}
    })
    console.log(user)
}

getUser("admin2");