import { Client } from "pg";

export async function getClient() {
    const client = new Client('postgresql://mydatabase_owner:ITyeSiDsUn61@ep-noisy-glade-a5gsnokz-pooler.us-east-2.aws.neon.tech/mydatabase?sslmode=require');
    await client.connect();
    return client
}