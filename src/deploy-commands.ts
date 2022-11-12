import { REST, Routes } from "discord.js";
import { resolve, join } from "path";
import { BOT_TOKEN, CLIENT_ID, GUILD_ID } from "./config";
import getJsFiles from "./utils/getJsFiles";

const rest = new REST({ version: "9" }).setToken(BOT_TOKEN);
const commands: string[] = [];

const commandDir = resolve(__dirname, "commands");
const commandFiles = getJsFiles(commandDir);

for (const file of commandFiles) {
  const command = require(join(commandDir, file));
  commands.push(command.data.toJSON());
}

const deployCommands = async () => {
  try {
    console.log("Started refreshing application (/) commands.");
    await rest.put(Routes.applicationCommands(CLIENT_ID), {
      body: commands,
    });
    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
};
deployCommands();
