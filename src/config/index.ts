import dotenv from "dotenv";
dotenv.config();

if (!process.env.CLIENT_ID) throw new Error("CLIENT_ID ENV is not defined");
if (!process.env.GUILD_ID) throw new Error("GUILD_ID ENV is not defined");
if (!process.env.BOT_TOKEN) throw new Error("BOT_TOKEN ENV is not defined");

export const CLIENT_ID = process.env.CLIENT_ID;
export const GUILD_ID = process.env.GUILD_ID;
export const BOT_TOKEN = process.env.BOT_TOKEN;
