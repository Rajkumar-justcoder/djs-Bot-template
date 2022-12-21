```js
const { Client, EmbedBuilder, SlashCommandBuilder, ChatInputCommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping') // name of cmd
        .setDescription('Sent bot ping info and latency') // desc of cmd 
        .setDMPermission(false), // false means do not allow user to use cmd in dm 
    /**
     * @param {ChatInputCommandInteraction} interaction intractions
     * @param {client} client client
     * @param {EmbedBuilder} EmbedBuilder embed bind
     */
    async run(interaction,client) {   // run as a execute function no other names
        try {
            // your code goes here 
        } catch (error) {
            console.log(error);
        }
    }
};

```