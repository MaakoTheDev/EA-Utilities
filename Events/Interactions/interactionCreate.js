const { EmbedBuilder, Client, CommandInteraction } = require("discord.js");
const { owners } = require("../../config.json");

module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    try {
      if (!command) {
        return interaction.reply({
          content: "This command is outdated",
          ephemeral: true,
        });
      }
      if (command.developer && interaction.user.id !== process.env.Developer)
        return interaction.reply({
          embeds: [
            new EmbedBuilder()
              .setDescription(
                `\\📛 **Error:** \\📛\n Sorry, You can't use that command!`
              )
              .setColor("Red"),
          ],
          ephemeral: true,
        });

      if (command.ownerOnly) {
        if (!client.config.owners.includes(interaction.user.id)) {
          return interaction.reply({
            embeds: [
              new EmbedBuilder()
                .setDescription(
                  `\\📛 **Error:** \\📛\n Sorry, You can't use that command!`
                )
                .setColor("Red"),
            ],
            ephemeral: true,
          });
        }
      }

      command.execute(interaction, client);
    } catch (error) {
      console.log(error);
    }
  },
};
