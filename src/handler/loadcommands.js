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
        if (!command?.data?.name) return Table.addRow(`${file.match(/[\w\s\-]+\.\w+$/)}`, '🔶 FAILED', `${file.match(/[\w\s\-]+\.\w+$/)} Missing a name ( name must be lowercase )`);

        if (!command?.run) return Table.addRow(`${command.name}`, '🔶 FAILED', `${file.match(/[\w\s\-]+\.\w+$/)} Missing a run function or if u have different name change it to run `);


        client.commands.set(command.data.name, command);
        SlashCommands.push(command.data.toJSON());
        Table.addRow(command.data.name, '🔷 Successfull');

    });

    client.application.commands.set(SlashCommands);  // global slash cmd, this take time to load / add cmd to all guild 

    console.log(Table.toString())
    console.log(`${SlashCommands.length}  Commands loaded `);

};