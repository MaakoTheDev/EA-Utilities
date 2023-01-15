const { Client } = require("discord.js");
const { owners } = require("../config.json");
const { loadFiles } = require("../Functions/fileLoader");
const chalk = require("chalk")

/**
 *
 * @param {Client} client
 */
async function loadCommands(client) {
  await client.commands.clear();

  let commandsArray = [];
  let developerArray = [];

  const Files = await loadFiles("Commands");

  Files.forEach((file) => {
    const command = require(file);

    if (command.subCommand) {
      return client.subCommands.set(command.subCommand, command);
    }

    if (!command.data.name)
      return console.error(`Command: ${file} doesn't have a name`);
    client.commands.set(command.data.name, command);

    if (command.developer) {
      developerArray.push(command.data.toJSON());
    } else {
      commandsArray.push(command.data.toJSON());
    }
  });
  client.application.commands.set(commandsArray);
  console.log(chalk.default.red("[/] Commands Loaded"));
}


module.exports = { loadCommands };
