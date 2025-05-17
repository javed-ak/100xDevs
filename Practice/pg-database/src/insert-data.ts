import { getClient } from "./utils";

async function createEntries() {
    const client = await getClient();
    try {
        const insertText = `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id`;
        const usreValue = ['javed@example.com', 'javed123'];
        let response = await client.query(insertText, usreValue);

        const insertTodoText = `INSERT INTO todos (title, description, user_id, isDone) VALUES ($1, $2, $3, $4) RETURNING id`;
        const todoValue = ['Go to GYM', 'Go to GYM at 7', response.rows[0].id, false];
        await client.query(insertTodoText, todoValue)
    } catch (err) {
        return console.log('Something went wrong! ' + err);
    }
    console.log('Data inserted!');
}

createEntries();