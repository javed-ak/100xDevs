import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware(c:any, next:any) {
  if(c.req.header('Authorization')) {
    // Logic
    await next()
  } else {
    return c.text('You do not have access')
  }
} 

// app.use(authMiddleware)

app.get('/', async (c) => {
  return c.text('Hello Javed')
})

app.post('/checkHono', authMiddleware, async (c) => {
  const body = await c.req.json();

  console.log(body);
  console.log(c.req.header('Authorization'));
  console.log(c.req.query('param'));

  return c.text('Hello Hono!')
})

export default app
