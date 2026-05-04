import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

if (!process.env.AUTH_DB_URI) {
  throw new Error("Missing AUTH_DB_URI in environment variables");
}

const client = new MongoClient(process.env.AUTH_DB_URI);
const db = client.db("nextread");

export const auth = betterAuth({
    // Explicitly set the base URL
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000", 
    emailAndPassword: {
        enabled: true,
    },
    database: mongodbAdapter(db, {
        client
    }),
});