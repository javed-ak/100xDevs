import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient;

// export async function GET() {
//     const user = await client.user.findFirst();

//     return NextResponse.json({
//         name: user?.name,
//         email: user?.email
//     })
    
// }

export async function POST(req: NextRequest) {
    const body = await req.json();
    try{
        await client.user.create({
            data: {
                name: body.name,
                email: body.email
            }
        })
        return NextResponse.json({
            body
        })
    } catch(e) {
        return NextResponse.json({
            msg: 'Error while Signingup!'
        }, {
            status: 411
        })
    }
}



// console.log(req.headers.get("authorization"));
// console.log(req.nextUrl.searchParams.get('name'))