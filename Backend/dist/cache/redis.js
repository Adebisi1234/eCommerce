import { createClient } from "redis";
const client = await createClient()
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();
export async function getOrSetCache(key, cb) {
    try {
        const data = await client.get(key);
        if (!data) {
            const data = await cb();
            await client.setEx(key, 3600, JSON.stringify(data));
            return typeof data === "string" ? JSON.parse(data) : data;
        }
        return typeof data === "string" ? JSON.parse(data) : data;
    }
    catch (err) {
        await client.del(key);
        if (err instanceof Error) {
            throw new Error(err.message);
        }
        throw new Error(`${err}`);
    }
}
export async function invalidateCache(key) {
    try {
        await client.del(key);
        return;
    }
    catch (err) {
        throw new Error(`${err}`);
    }
}