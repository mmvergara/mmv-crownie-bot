import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, EmbedBuilder, APIEmbed, JSONEncodable } from "discord.js";

export const data = new SlashCommandBuilder().setName("schedule").setDescription("School Schedule");

export function execute(interaction: CommandInteraction) {
  console.log(`User ${interaction.user.username} has used the botinfo command`);

  const subjectOnDayX = [
    {
      name: "Monday",
      value: "CC104 - **8:00am** \n GE-CW - **1:00pm**",
    },
    {
      name: "Tuesday",
      value: "GE-ELECT - **8:00am** \n PE 3 - **10:00am** \n GE AA - **1:00pm**\n",
    },
    {
      name: "Wednesday",
      value: "CC104 - **8:00am** \n GE-CW - **1:00pm**",
    },
    {
      name: "Thursday",
      value: "GE-ELECT - **8:00am** \n PE 3 - **10:00am** \n GE AA - **1:00pm**",
    },
    {
      name: "Friday",
      value: "CC104 - **8:00am**\n PE 3 - **10:00am**",
    },
    {
      name: "Saturday",
      value: "WALANG PASOK",
    },
    {
      name: "Sunday",
      value: "WALANG PASOK",
    },
  ];

  const dateToday = new Date().getDay();
  const todayScheduleInfo = subjectOnDayX[dateToday - 1];

  const embeds: (APIEmbed | JSONEncodable<APIEmbed>)[] = [
    {
      title: "Schedule of BSIT 2-A",
      description: `======**Today is ${todayScheduleInfo.name}**======\n ${todayScheduleInfo.value} \n ======**${todayScheduleInfo.name}**======\n`,
      url: "https://i.ibb.co/StGcn7B/schedule.jpg",
      image: {
        url: "https://i.ibb.co/StGcn7B/schedule.jpg",
      },
      fields: [...subjectOnDayX.slice(0, 5)],
      color: 4321431,
    },
  ];

  return interaction.reply({ embeds });
}
