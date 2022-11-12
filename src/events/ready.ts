import { ActivityType, Client } from "discord.js";

export = {
  name: "ready",
  once: true,
  async execute(client: Client) {
    client.user?.setActivity({ name: "my miserable life", type: ActivityType.Watching});
    console.log(`${client.user?.tag}Bot is Ready!`);
  },
};
