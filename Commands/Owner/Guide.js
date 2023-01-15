const {
  SlashCommandBuilder,
  CommandInteraction,
  PermissionFlagsBits,
  Client,
  EmbedBuilder,
  Options,
  ChannelType,
  messageLink,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");
const ms = require("ms");

module.exports = {
  ownerOnly: true,
  data: new SlashCommandBuilder()
    .setName("guide")
    .setDescription("Post the server guide")
    .addChannelOption((option) =>
      option
        .setName("channel")
        .setDescription("Mention a channel")
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
  async execute(interaction, client) {
    const { guild } = interaction;
    const GuideChannel = interaction.options.getChannel("channel");
    const GuideEmbed = new EmbedBuilder()
      .setAuthor({
        name: guild.name,
        iconURL: guild.iconURL(),
      })
      .setTitle("Guides")
      .setDescription(
        "Need assistance with the processes of becoming a partner, sponsor, affiliate, or other? Select the button that corresponds to your search."
      )
      .setColor("#5e86e7")
      .setImage(
        "https://media.discordapp.net/attachments/1056852012966350868/1063510926508179456/My_project-1_3.png?width=1440&height=394"
      );
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Advertise")
        .setCustomId("advertise")
        .setStyle(ButtonStyle.Secondary),

      new ButtonBuilder()
        .setLabel("Partner")
        .setCustomId("partner")
        .setStyle(ButtonStyle.Secondary),

      new ButtonBuilder()
        .setLabel("Sponsor")
        .setCustomId("sponsor")
        .setStyle(ButtonStyle.Secondary),

      new ButtonBuilder()
        .setLabel("Affiliate")
        .setCustomId("affiliate")
        .setStyle(ButtonStyle.Secondary),

      new ButtonBuilder()
        .setLabel("Alliance")
        .setCustomId("alliance")
        .setStyle(ButtonStyle.Secondary)
    );

    client.channels.cache
      .get(GuideChannel.id)
      .send({
        embeds: [GuideEmbed],
        components: [row],
      })
      .then(interaction.reply({ content: "Guides as been posted" }));
  },
};
