const {
  CommandInteraction,
  SlashCommandBuilder,
  PermissionFlagsBits,
  Client,
  InteractionCollector,
  EmbedBuilder,
} = require("discord.js");

const { loadCommands } = require("../../Handlers/Commands");
const { loadEvents } = require("../../Handlers/Events");

module.exports = {
  developer: true,
  data: new SlashCommandBuilder()
    .setName("reload")
    .setDescription("Reload Commands or Events")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommand((options) =>
      options.setName("events").setDescription("Reload Events")
    )
    .addSubcommand((options) =>
      options.setName("commands").setDescription("Reload Commands")
    ),
  /**
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */

  execute(interaction, client) {
    const subcommand = interaction.options.getSubcommand();
    const { logchannel } = require("../../config.json");
    const Logs = client.channels.cache.get(logchannel);

    switch (subcommand) {
      case "events":
        {
          for (const [key, value] of client.events) {
            client.removeListener(`${key}`, value, true);
          }

          Logs.send({
            embeds: [
              new EmbedBuilder()
                .setAuthor({
                  name: client.user.tag,
                  iconURL: client.user.displayAvatarURL(),
                })
                .setColor("2F3136")
                .setThumbnail(client.user.displayAvatarURL())
                .addFields({
                  name: "Event's loaded",
                  value: `<t:${parseInt(
                    interaction.createdTimestamp / 1000
                  )}:F> - <t:${parseInt(
                    interaction.createdTimestamp / 1000
                  )}:R>`,
                }),
            ],
          });

          loadEvents(client);
          interaction.reply({
            content: "**Event's Loaded**",
          });
        }
        break;
      case "commands":
        {
          Logs.send({
            embeds: [
              new EmbedBuilder()
                .setAuthor({
                  name: client.user.tag,
                  iconURL: client.user.displayAvatarURL(),
                })
                .setColor("2F3136")
                .setThumbnail(client.user.displayAvatarURL())
                .addFields({
                  name: "Commands's loaded",
                  value: `<t:${parseInt(
                    interaction.createdTimestamp / 1000
                  )}:F> - <t:${parseInt(
                    interaction.createdTimestamp / 1000
                  )}:R>`,
                }),
            ],
          });

          loadCommands(client);
          interaction.reply({
            content: "**Commands Loaded**",
          });
        }
        break;
    }
  },
};
