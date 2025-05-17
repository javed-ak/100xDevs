import { getClient } from "./utils";

async function deleteTodo(userId: number) {
    const client = await getClient();

    const deleteTodoText = `DELETE FROM todos WHERE user_id = $1`;
    await client.query(deleteTodoText, [userId]);

    console.log(`Todo with user_id ${userId} deleted successfully!`);
}

deleteTodo(1);
