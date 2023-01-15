const chalk = require("chalk");
const mongoose = require("mongoose");
const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ChannelType,
  CommandInteraction,
  Client,
} = require("discord.js");
const { connect } = require("mongoose");
const { logchannel } = require("../../config.json");
const { loadCommands } = require("../../Handlers/Commands");

module.exports = {
  name: "ready",
  once: true,
  /**
   * @param {CommandInteraction} interaction,
   * @param {Client} client
   */
  async execute(client, interaction) {
    let acts = [
      {
        name: "Explix Advertising",
        type: 3,
      },
      {
        name: `.gg/selfads`,
        type: 3,
      },
    ];
    setInterval(async () => {
      const currentAct = acts.shift();
      client.user.setPresence({
        activities: [
          {
            name: currentAct.name.toString(),
            type: currentAct.type,
          },
        ],
        status: "online",
      });
      acts.push(currentAct);
    }, 15000);

    console.log(chalk.default.magenta(`Logging in...`));
    console.log(chalk.magenta(`Successfully logged in as ${client.user.tag}`));

    mongoose.set("strictQuery", false);
    const Connect = process.env.MongoUri;
    await connect(Connect)
      .then(() => {
        console.log(chalk.default.greenBright(`[%] Mongoose Connecting...`));
        console.log(
          chalk.default.greenBright(
            `[%] Successfully Connected to the Database`
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
    loadCommands(client);
    console.log(chalk.default.red(`[#] Events Loaded`));
  },
};
