import { getClient } from "./utils";

export async function updateTodo(userId: number) {
    const client = await getClient();
    
    const updateTodoText = `UPDATE todos SET isDone = $1 WHERE user_id = $2`;
    await client.query(updateTodoText, [true, userId]);

    console.log(`Todo updated with user_id: ${userId}`);
}

updateTodo(1);