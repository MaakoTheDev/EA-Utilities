const {
  CommandInteraction,
  Client,
  EmbedBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  name: "interactionCreate",
  /**
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    if (interaction.isButton) {
      const tos = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setLabel("Terms of service")
          .setStyle(ButtonStyle.Link)
          .setURL("https://discord.com/terms"),

        new ButtonBuilder()
          .setLabel("Community guidelines")
          .setStyle(ButtonStyle.Link)
          .setURL("https://discord.com/guidelines")
      );
      switch (interaction.customId) {
        case "advertise":
          const adsbed = new EmbedBuilder()
            .setColor("#5e86e7")
            .setTitle(
              "<:Rules:1063513308059156490> __How To Advertise__ <:Rules:1063513308059156490>"
            )
            .setDescription(
              `> <:dot:1060028463672737833> **1. Please keep all advertisements on the correct channels**\n> <:Reply:1063513005867946134>Do not post your ad in a channel it doesn't belong. For example, a gaming server shouldn't be posted in development.\n> <:dot:1060028463672737833> **2. Refrain from having \`@everyone\` or \`@here\` in your ad**\n> <:Reply:1063513005867946134>Don't even try to ping, it's not gonna work.\n> <:dot:1060028463672737833> **3. Do not send ads back to back**\n> <:Reply:1063513005867946134>This is a way of spamming.\n> <:dot:1060028463672737833> **4. No advertising NSFW**\n> <:Reply:1063513005867946134>As said in the general rules, we are FAMILY FRIENDLY.\n> <:dot:1060028463672737833> **5. Please include a description of your server.**\n> <:Reply:1063513005867946134>You must explain what your server is about. People are not gonna join a random invite posted with no context.\n> <:dot:1060028463672737833> **6. Do not promote servers that encourage ddosing, nuking, raiding, or any other harmful activity**\n> <:Reply:1063513005867946134>We have zero tolerance for this, you will be punished and reported immediately. \n> <:dot:1060028463672737833> **7. Replying to other members is prohibited in ad channels**\n> <:Reply:1063513005867946134>Do not use the ping on reply feature just to ping other members to see your server.`
            );
          interaction.reply({
            embeds: [adsbed],
            components: [tos],
            ephemeral: true,
          });
          break;
        case "partner":
          const partbed = new EmbedBuilder()
            .setColor("#5e86e7")
            .setTitle(
              `<:Rules:1063513308059156490> **Partner with ${interaction.guild.name}**  <:Rules:1063513308059156490>`
            )
            .setDescription(`<:Book:1064228047173193799> **Requirements** <:Book:1064228047173193799>\n> <:dot:1060028463672737833>  Your server must follow **our Rules**.
              > <:dot:1060028463672737833>  Your server must follow **Discord TOS & Community Guidelines**.
              > <:dot:1060028463672737833>  Your server must have above **50 Members**. 
              > <:dot:1060028463672737833>  Your advertisement must be **longer than 100 characters**.
              > <:dot:1060028463672737833>  Your server server must be **SFW**.
              > <:dot:1060028463672737833>  A **representative** must stay in our server.
              
               :tada:  **Perks** :tada: 
              
              > <:dot:1060028463672737833>  Get access to advertise in <#1061620072793243698>.
              > <:dot:1060028463672737833>  Get <@&1061597250226233394> Role.
              
              > **To Partner with us <@!1064097807792885781>**`);
          interaction.reply({
            embeds: [partbed],
            components: [tos],
            ephemeral: true,
          });
          break;
        case "sponsor":
          const sponed = new EmbedBuilder()
            .setColor("#5e86e7")
            .setTitle(
              `<:Rules:1063513308059156490> **Sponsor ${interaction.guild.name}**  <:Rules:1063513308059156490>`
            )
            .setDescription(
              `<:Book:1064228047173193799> **Requirements** <:Book:1064228047173193799>\n> <:dot:1060028463672737833>  Your server must follow **our Rules**.
              > <:dot:1060028463672737833>  Your server must follow **Discord TOS & Community Guidelines**.
              > <:dot:1060028463672737833>  Your server must have above **200 Members**. 
              > <:dot:1060028463672737833>  Your server server must be **SFW**.
              > <:dot:1060028463672737833>  A **representative** must stay in our server.
              
              :tada: **Perks** :tada:

              > <:dot:1060028463672737833> **A channel that displays you server advertisement.**
              > <:dot:1060028463672737833> **Get <@&1064229837553815653> Role.**
              
              <:9919discordinfo:1064246168068030464> **How to Sponsor** <:9919discordinfo:1064246168068030464>
              > <:dot:1060028463672737833> Create a channel called \`🚀・explix-ads.\` (Customize it however you want.)
              > <:dot:1060028463672737833> Post our Ad in that channel. (<#1064245070620016660>)
              > <:dot:1060028463672737833> **DM <@!1064097807792885781> asking to sponsor**
              `
            );
          interaction.reply({
            embeds: [sponed],
            components: [tos],
            ephemeral: true,
          });
          break;
        case "affiliate":
          const affed = new EmbedBuilder()
            .setColor("5e86e7")
            .setTitle(
              `<:Rules:1063513308059156490> Affiliate with ${interaction.guild.name} <:Rules:1063513308059156490>`
            )
            .setDescription(
              `<:Book:1064228047173193799> **Requirements** <:Book:1064228047173193799>\n> <:dot:1060028463672737833>  Your server must follow **our Rules**.
              > <:dot:1060028463672737833> Your server must follow **Discord TOS & Community Guidelines**.
              > <:dot:1060028463672737833> **200 Members** and have avarage \`10\` daily joins. 
              > <:dot:1060028463672737833> Your server server must be **SFW**.
              > <:dot:1060028463672737833> Your Affiliation channel must have POJ(Ping on join)

              :tada: **Perks** :tada:

              > <:dot:1060028463672737833> Growth Boost.
              > <:dot:1060028463672737833> Get <@&1064249537813815356> Role.

              <:9919discordinfo:1064246168068030464> **How To Affiliate** <:9919discordinfo:1064246168068030464>

              > <:dot:1060028463672737833> **DM <@!1064097807792885781>**
            `
            );

          interaction.reply({
            embeds: [affed],
            components: [tos],
            ephemeral: true,
          });
          break;
        case "alliance":
          const alled = new EmbedBuilder()
            .setTitle(
              `<:Rules:1063513308059156490> Join Explix Alliance <:Rules:1063513308059156490>`
            )
            .setDescription(
              `<:Book:1064228047173193799> **Requirements** <:Book:1064228047173193799>\n> <:dot:1060028463672737833>  Your server must follow **our Rules**.
              > <:dot:1060028463672737833> Your server must follow **Discord TOS & Community Guidelines**.
              > <:dot:1060028463672737833> Your server must have above **300 Members**. 
              > <:dot:1060028463672737833> Your server server must be **SFW**.
              > <:dot:1060028463672737833> Your server must be a Advertising Server.
              > <:dot:1060028463672737833> A **representative** must stay in our server.
              
              :tada: **Perks** :tada:

              > <:dot:1060028463672737833> Growth Boost.
              > <:dot:1060028463672737833> Get <@&1064249586744578058> Role.
              `
            )
            .setColor("5e86e7");

          const alled2 = new EmbedBuilder()
            .setColor("5e86e7")
            .setTitle(
              `<:9919discordinfo:1064246168068030464> How to Join <:9919discordinfo:1064246168068030464>`
            )
            .setDescription(
              `
              > <:dot:1060028463672737833> Create a channel called \`🚀・explix-alliance\` (Customize it however you want!)
              > <:dot:1060028463672737833> Post everything in <#1064254285707235432> in that channel.
              > <:dot:1060028463672737833> Follow <#1064254285707235432>.
              > <:dot:1060028463672737833> Fill out the Template below and send it to one of the owners (<@954885556758806639>, <@812578208188596285>, <@294571088686612480>)
              \`\`\`**Server Name:**\n**Server Type:**\n**Owner:**\n[permanent server invite]\`\`\`
              > <:dot:1060028463672737833> **DM <@!1064097807792885781> when you're done.**
              `
            );

            interaction.reply({
              embeds: [alled, alled2],
              components: [tos],
              ephemeral: true
            })
      }
    }
  },
};
