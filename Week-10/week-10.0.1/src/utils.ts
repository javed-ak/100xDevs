import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://test_fvul_user:d4A1ms5VaekuMK79YiFenLIHXc0sQZCN@dpg-crha68l6l47c73c4vp1g-a.oregon-postgres.render.com/test_fvul?ssl=true");
    await client.connect();
    return client;
}