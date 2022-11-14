"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const config_1 = require("./config");
const path_1 = require("path");
const getJsFiles_1 = __importDefault(require("./utils/getJsFiles"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Listening in port ", port);
});
app.get("/", (req, res, next) => {
    res.send("HELLO Discord BOT!");
});
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
    ],
});
client.commands = new discord_js_1.Collection();
//handle setting of commands
const commandDir = (0, path_1.resolve)(__dirname, "commands");
const commandFiles = (0, getJsFiles_1.default)(commandDir);
for (const file of commandFiles) {
    const command = require((0, path_1.join)(commandDir, file));
    client.commands.set(command.data.name, command);
}
// #region Handle events
const eventDir = (0, path_1.resolve)(__dirname, "events");
const eventFiles = (0, getJsFiles_1.default)(eventDir);
for (const file of eventFiles) {
    const event = require((0, path_1.join)(eventDir, file));
    const handler = event.once ? "once" : "on";
    client[handler](event.name, (...args) => event.execute(...args));
}
// #endregion
client.login(config_1.BOT_TOKEN);
