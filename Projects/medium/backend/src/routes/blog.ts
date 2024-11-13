import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { createBlogInput, updateBlogInput } from "@javed-ak/common";

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
    const authHeader = c.req.header('authorization') || '';
    const token = authHeader.split(" ")[1]
    
    try {
        const response = await verify(token, c.env.JWT_SECRET);
    if(response) {
        //@ts-ignore
      c.set("userId", response.id)
      await next();
    } else {
      c.status(403)
      return c.json({
        error: "Unauthorized"
      })
    }
    } catch (e) {
        c.status(403);
        console.log('Authorization Error');
        return c.json({
            error: 'You are not login!'
        })
    }
})

blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const authorId = c.get('userId');

    const { success } = createBlogInput.safeParse(body)
    if(!success) {
        c.status(403);
        return c.json({
        msg: 'Inputs are not correct'
        })
    }

    try{
        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: authorId
            }
        })
        return c.json({
            id: blog.id
        })
    } catch (e) {
        c.status(403)
        return c.json({
            error: 'Something went wrong!!'
        })
    }
})
  
blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();

    const { success } = updateBlogInput.safeParse(body)
    if(!success) {
        c.status(403);
        return c.json({
        msg: 'Inputs are not correct'
        })
    }

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
  
blogRouter.get(':id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const id = c.req.param('id');

    try{
        const blog = await prisma.post.findFirst({
            where: {
                id: id
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
  
