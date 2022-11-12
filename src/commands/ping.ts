import { SlashCommandBuilder } from "discord.js";
import { CommandInteraction } from "discord.js";

export const data = new SlashCommandBuilder().setName("ping").setDescription("pong!");

export function execute(interaction: CommandInteraction) {
  console.log(`User ${interaction.user.username} has used the help command`);
  interaction.reply(`What's up? ${interaction.user.username}`);
}
