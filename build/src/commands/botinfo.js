"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = exports.data = void 0;
const builders_1 = require("@discordjs/builders");
const discord_js_1 = require("discord.js");
const package_json_1 = require("../../package.json");
exports.data = new builders_1.SlashCommandBuilder()
    .setName("botinfo")
    .setDescription("Responds with infromation about the discord bot");
function execute(interaction) {
    console.log(`User ${interaction.user.username} has used the botinfo command`);
    const botinfo = new discord_js_1.EmbedBuilder()
        .setTitle("Bot Info")
        .setDescription("Curios ka saken? LUL")
        .setColor("Aqua")
        .addFields({
        name: "Name",
        value: `${interaction.client.user.username}`,
    }, {
        name: "version",
        value: `${package_json_1.version}`,
    }, {
        name: "ping",
        value: `${interaction.client.ws.ping}`,
    });
    return interaction.reply({ embeds: [botinfo] });
}
exports.execute = execute;
