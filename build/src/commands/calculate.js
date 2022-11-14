"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = exports.data = void 0;
const builders_1 = require("@discordjs/builders");
const discord_js_1 = require("discord.js");
exports.data = new builders_1.SlashCommandBuilder()
    .setName("calculate")
    .setDescription("Calculate a math expression for you")
    .addStringOption((option) => option.setName("math_expression").setDescription("Insert Math Expression").setRequired(true));
function execute(interaction) {
    var _a;
    console.log(`User ${interaction.user.username} has used the botinfo command`);
    const expression = (_a = interaction.options.get("math_expression")) === null || _a === void 0 ? void 0 : _a.value;
    let result;
    try {
        result = eval(String(expression));
    }
    catch (error) {
        interaction.reply("I didn't recognize that as a Math Expression");
        return;
    }
    const calculatedEmbed = new discord_js_1.EmbedBuilder()
        .setTitle(`Answer: ${result}`)
        .addFields({
        name: "Math Expression",
        value: String(expression),
    })
        .setColor("Aqua");
    return interaction.reply({
        content: `${interaction.user.username} doesn't know simple math, nakaka disappoint`,
        embeds: [calculatedEmbed],
    });
}
exports.execute = execute;
