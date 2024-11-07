import { PrismaClient } from "@prisma/client";

const client = new PrismaClient;

async function fetchData () {
    const user = await client.user.findFirst({})
    return ({
        name: user?.name,
        email: user?.email
    })
}

export default async function page() {
    const data = await fetchData()
    return <div className="h-screen flex justify-center items-center">
        <div className="p-8 border shadow-lg rounded-lg">
        <div className="flex gap-1">Name: <div className="font-bold text-lg">{data.name}</div></div>
        <div>{data.email}</div>
    </div>
    </div>
}
