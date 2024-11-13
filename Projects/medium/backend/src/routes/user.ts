import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt';
import { signupInput, signinInput } from "@javed-ak/common";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>();

userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  const body = await c.req.json();
  const { success } = signupInput.safeParse(body)

  if(!success) {
    c.status(403);
    return c.json({
      msg: 'Inputs are not correct'
    })
  }

  try{
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password
      }
    })
    const token = await sign({id: user.id}, c.env.JWT_SECRET)
      return c.json({
        token: 'bearer ' + token
      })
    } catch(e) {
      c.status(403)
      return c.json({
        msg: 'Error while Signing Up!'
      })
  }
  })
  
  userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  const body = await c.req.json();
  
  try{
    const user = await prisma.user.findUnique({
      where: {
        email: body.email
      }
    });
    
    if(!user) {
      c.status(403)
      return c.json({
        error: 'User not found!'
      })
    }
    
    const token = await sign({id: user.id}, c.env.JWT_SECRET)
      return c.json({
        token: 'Bearer ' + token
      })
  } catch(e) {
    c.status(403)
    return c.json({
      error: 'Something went wrong!'
    })
  }
  })