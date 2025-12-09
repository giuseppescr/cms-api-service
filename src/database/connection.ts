import knex from "knex";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const connectionDb = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST as string,
    port: 3306,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string
  }
});