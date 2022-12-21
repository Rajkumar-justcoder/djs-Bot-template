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
your commands goes inside `/src/commands/any_folder_if_u_have/cmd_name.js` 
like if its servercommands then its inside `src/commands/servercommands/` eg `src/commands/servercommands/serverinfo.js`