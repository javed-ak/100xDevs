import { getClient } from "./utils";

export async function getUsers() {
    const client = await getClient();

    const selectUsesrText = `SELECT * FROM users`;
    const userRes = await client.query(selectUsesrText);

    console.log("Users: ");
    for(let user of userRes.rows) {
        console.log(`ID: ${user.id}, Email: ${user.email}`)
    }
}

export async function getUserFromEmail(email: string) {
    const client = await getClient();

    const getUserText = `SELECT * FROM users WHERE email=$1`;
    const getUser = await client.query(getUserText, [email]);

    console.log(`User with ${email} is: `);
    for(let user of getUser.rows) {
        console.log(`ID: ${user.id}, Email: ${user.email}`);
    }
}

export async function getTodos() {
    const client = await getClient();
    const allTodosText = `SELECT * FROM todos`;
    const allTodos = await client.query(allTodosText);

    console.log('Todos: ');
    for(let todo of allTodos.rows) {
        console.log(`ID: ${todo.id}, Title: ${todo.title}, Description: ${todo.description}`);
    }
}

export async function getTodosForUser(userId: number) {
    const client = await getClient();

    const getUserTodoText = `SELECT * FROM todos WHERE user_id = $1`;
    const getUserTodos = await client.query(getUserTodoText, [userId]);

    console.log('Todos of user_id: ' + userId);
    for( let todo of getUserTodos.rows ) {
        console.log(`ID: ${todo.id}, Title: ${todo.title}, Description: ${todo.description}, isDone: ${todo.isDone}`)
    }
}

getUsers();
getUserFromEmail('javed@example.com');
getTodos();
getTodosForUser(1);