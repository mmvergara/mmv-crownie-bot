import { Client, GatewayIntentBits, Collection } from "discord.js";
import { BOT_TOKEN } from "./config";
import { resolve, join } from "path";
import getJsFiles from "./utils/getJsFiles";


import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Listening in port ", port);
});

app.get("/", (req, res, next) => {
  res.send("HELLO Discord BOT!");
});

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

declare module "discord.js" {
  interface Client {
    commands: Collection<unknown, any>;
  }
}

client.commands = new Collection();

//handle setting of commands
const commandDir = resolve(__dirname, "commands");
const commandFiles = getJsFiles(commandDir);
for (const file of commandFiles) {
  const command = require(join(commandDir, file));
  client.commands.set(command.data.name, command);
}

// #region Handle events
const eventDir = resolve(__dirname, "events");
const eventFiles = getJsFiles(eventDir);
for (const file of eventFiles) {
  const event = require(join(eventDir, file));
  const handler = event.once ? "once" : "on";
  client[handler](event.name, (...args) => event.execute(...args));
}
// #endregion

client.login(BOT_TOKEN);
