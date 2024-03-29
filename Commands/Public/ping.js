const {
  SlashCommandBuilder,
  CommandInteraction,
  PermissionFlagsBits,
  Client,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("🏓 Pong!")
    .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
  async execute(interaction, client) {
    await interaction.reply({
      content: `**🏓 Pong - ${client.ws.ping}ms**`
    })
  },
};
