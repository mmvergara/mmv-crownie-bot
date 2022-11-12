import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, EmbedBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("calculate")
  .setDescription("Calculate a math expression for you")
  .addStringOption((option) =>
    option.setName("math_expression").setDescription("Insert Math Expression").setRequired(true)
  );

export function execute(interaction: CommandInteraction) {
  console.log(`User ${interaction.user.username} has used the botinfo command`);
  const expression = interaction.options.get("math_expression")?.value;
  let result;
  try {
    result = eval(String(expression));
  } catch (error) {
    interaction.reply("I didn't recognize that as a Math Expression");
    return;
  }

  const calculatedEmbed = new EmbedBuilder()
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
