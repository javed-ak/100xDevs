import { getClient } from "./utils"

async function createTable() {
    const client = await getClient();

    try {
        const createUserTableQuery = `
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            );
        `;

        await client.query(createUserTableQuery);

        const createTodosTableQuery = `
            CREATE TABLE todos (
                id SERIAL PRIMARY KEY,
                title TEXT NOT NULL,
                description TEXT,
                user_id INTEGER REFERENCES users(id),
                isDone BOOLEAN DEFAULT FALSE
            );
        `;

        await client.query(createTodosTableQuery);
    } catch(e) {
        return console.log("Table not created " + e)
    }
    console.log("Table created successfully!");
}

createTable();