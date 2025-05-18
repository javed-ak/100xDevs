import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(email: string, firstName: string, lastName: string, password: string) {
    const res = await prisma.users.create({
        data: {
            email,
            firstName,
            lastName,
            password
        },
        select: {
            id: true,
            firstName: true
        }
    })

    console.log(res)
}

interface UpdateParams {
    firstName: string,
    lastName: string
}

async function updateUser(email:string, {firstName, lastName}: UpdateParams) {
    await prisma.users.update({
        where: { email : email }, 
        data: {
            firstName,
            lastName
        }
    })
    console.log('User Updated');
}

async function getUsers() {
    const res = await prisma.users.findMany();
    console.log(res)
}
getUsers();