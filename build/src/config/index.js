"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOT_TOKEN = exports.GUILD_ID = exports.CLIENT_ID = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
if (!process.env.CLIENT_ID)
    throw new Error("CLIENT_ID ENV is not defined");
if (!process.env.GUILD_ID)
    throw new Error("GUILD_ID ENV is not defined");
if (!process.env.BOT_TOKEN)
    throw new Error("BOT_TOKEN ENV is not defined");
exports.CLIENT_ID = process.env.CLIENT_ID;
exports.GUILD_ID = process.env.GUILD_ID;
exports.BOT_TOKEN = process.env.BOT_TOKEN;
