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
    .setName("paidads")
    .setDescription("Post the server paidads")
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

    const Embed1 = new EmbedBuilder()
      .setTitle("Explix Paid Ads")
      .setColor("#5e86e7")
      .setDescription(
        "Struggling to grow your server, socials, bots etc? Don’t worry, here at Explix we offer paid plans to boost your growth. Giveaways will be posted to all servers follow the giveaway channel, gaining impressions from here and other servers."
      );

    const Embed2 = new EmbedBuilder().setColor("#5e86e7").setDescription(
      `**Giveaway Package #1 - $3.99 - 3d**
        <:Dot:1063443092721643531>  Prize: Premium
        <:Dot:1063443092721643531> One <@&1057611082274975784> ping with requirement to join you server
        
        __Your Perks:__
        <:Dot:1063443092721643531> Lifetime ReviewsBot Premium
        <:Dot:1063443092721643531> Lifetime access to <#1060006661206585444>
        
        **Giveaway Package #2 - $9.99 - 7d**
        <:Dot:1063443092721643531> Prize: Nitro Basic 1 Month
        <:Dot:1063443092721643531> One <@&1057611082274975784> ping with requirement to join you server
        
        __Your Perks:__
        <:Dot:1063443092721643531> Lifetime ReviewsBot Premium
        <:Dot:1063443092721643531> Lifetime access to <#1060006661206585444>
        
        
        **Giveaway Extensions:**
        <:Dot:1063443092721643531> \`$3.99\` Ping On Join
        <:Dot:1063443092721643531> \`$4.99\` Extra <@&1057611082274975784> Ping
        <:Dot:1063443092721643531> \`4.99\` Extra 7 Days
        
        **To Purchase A Promo Please DM** <!@954885556758806639>`
    );

    client.channels.cache
      .get(GuideChannel.id)
      .send({
        embeds: [Embed1, Embed2],
      })
      .then(interaction.reply({ content: "Paid Ads Posted" }));
  },
};
