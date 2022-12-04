const Ascii = require("ascii-table");
const { Client } = require("discord.js");
const { promisify } = require('util');
const glob = promisify(require('glob'));

/**
 * @param {Client} client
 */
module.exports = async (client) => {

    // Events
    const commandsFiles = await glob(`${process.cwd().replace(/\\/g, '/')}/src/commands/**/*.js`);
    commandsFiles.forEach((file) => {
        require.resolve(file);
    });
    const Table = new Ascii('/Commands Loaded');
    Table.setHeading(`Command Name`, 'Status', 'Error');
    const SlashCommands = [];
    commandsFiles.forEach((file) => {
        const command = require(file);
        if (!command?.name) return Table.addRow(`${file.match(/[\w\s\-]+\.\w+$/)}`, '🔶 FAILED', `${file.match(/[\w\s\-]+\.\w+$/)} Missing a name ( name must be lowercase )`);

        if (!command?.description) return Table.addRow(`${command.name}`, '🔶 FAILED', `${file.match(/[\w\s\-]+\.\w+$/)} Valid command desc is not provided`);

        if (!command?.run) return Table.addRow(`${command.name}`, '🔶 FAILED', `${file.match(/[\w\s\-]+\.\w+$/)} Missing a run function`);


        client.commands.set(command.name, command);
        SlashCommands.push(command);
        Table.addRow(command.name, '🔷 Successfull');

    });

    if (client.config.PRIVATEGUILD) {

        const privateguild = client.guilds.cache.get(client.config.PRIVATEGUILD);
        privateguild.commands.set(SlashCommands);  // set cmd to private guild

    } else {
        client.application.commands.set(SlashCommands);  // global slash cmd, this take time to load / add cmd to all guild 
    }
    console.log(Table.toString())
    console.log(`${SlashCommands.length}  Commands loaded `);

};