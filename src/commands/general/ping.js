const { Client, EmbedBuilder, SlashCommandBuilder, ChatInputCommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Sent bot ping info and latency')
        .setDMPermission(false),
    /**
     * @param {ChatInputCommandInteraction} interaction intractions
     * @param {client} client client
     * @param {EmbedBuilder} EmbedBuilder embed bind
     */
    async run(interaction) {
        try {
            const pingLatency = Date.now() - interaction.createdTimestamp;
            const apiLatency = Math.round(`${interaction.client.ws.ping}`);
            const pingembed = new EmbedBuilder()
                .setColor('Random')
                .setAuthor({
                    name: `${interaction.guild.name}`,
                    iconURL:
                        `${interaction.guild.iconURL({ dynamic: true, size: 512 })}`
                })
                .setTitle(`Bot Ping`)
                .addFields(
                    { name: 'Ping Latency', value: `\`${pingLatency} ms\`` },
                    { name: 'API Latency', value: `\`${apiLatency} ms\`` }
                )
                .setFooter({ text: `${interaction.user.username}`, iconURL: `${interaction.guild.iconURL({ dynamic: true })}` })
                .setTimestamp();
            interaction.reply({ embeds: [pingembed] });
        } catch (error) {
            console.log(error);
        }
    }
};
