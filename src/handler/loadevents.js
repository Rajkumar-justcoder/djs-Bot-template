const { Client } = require("discord.js");
const { promisify } = require('util');
const glob = promisify(require('glob'));
const Ascii = require('ascii-table');
/**
 * @param {Client} client
 */

module.exports = async (client) => {

    const eventfiles = await glob(`${process.cwd().replace(/\\/g, '/')}/src/events/**/*.js`);
    eventfiles.forEach((file) => {
        require.resolve(file);
    });
    const Table = new Ascii('Events Loaded');
    Table.setHeading(`Event Name`, 'Status', 'Error');
    eventfiles.forEach((file) => {
        const event = require(file);

        if (!event?.name) return Table.addRow(`${file.match(/[\w\s\-]+\.\w+$/)}`, '🔶 FAILED', `${file.match(/[\w\s\-]+\.\w+$/)} Missing a name.`);

        if (!event?.run) return Table.addRow(`${event.run}`, '🔶 FAILED', `${file.match(/[\w\s\-]+\.\w+$/)} Missing a run function`);

        const run = (...args) => event.run(...args, client);
        client.events.set(event.name, run);

        if (event.once) {
            client.once(event.name, run);
        } else {
            client.on(event.name, run);
        }
        Table.addRow(event.name, '🔷 Successfull');
    });
    // Table.setHeading(`${eventfiles.length}  Events loaded `)
    console.log(Table.toString());
    console.log(`${eventfiles.length}  Events loaded `);

};