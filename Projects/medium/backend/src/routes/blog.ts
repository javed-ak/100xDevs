import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Variable } from "lucide-react";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }, 
    Variables: {
        userId: string
    }
}>();

blogRouter.use('/*', async (c, next) => {
    const header = c.req.header('authorization') || "";
    const token = header.split(" ")[1]
    
    const response = await verify(token, c.env.JWT_SECRET);
    if(response) {
        c.set('userId', response.id);
      next();
    } else {
      c.status(403)
      c.json({
        error: "Unauthorized"
      })
    }
  })

blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();

    const blog = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: 'author1'
        }
    })
    return c.json({
        id: blog.id
    })
})
  
blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();

    const blog = await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content
        }
    })
    return c.json({
        id: blog.id
    })
})
  
blogRouter.get(':id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();

    try{
        const blog = await prisma.post.findFirst({
            where: {
                id: body.id
            }
        })
        return c.json({
            blog
        })
    } catch(e) {
        c.status(403)
        return c.json({
            error: 'Error while fetching blog post'
        })
    }
})
  

// Add pagination

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany();

    return c.json({
        blogs
    })
  })