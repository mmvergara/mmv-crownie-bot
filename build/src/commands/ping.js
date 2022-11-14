"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = exports.data = void 0;
const discord_js_1 = require("discord.js");
exports.data = new discord_js_1.SlashCommandBuilder().setName("ping").setDescription("pong!");
function execute(interaction) {
    console.log(`User ${interaction.user.username} has used the help command`);
    interaction.reply(`What's up? ${interaction.user.username}`);
}
exports.execute = execute;
