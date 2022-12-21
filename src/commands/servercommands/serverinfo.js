const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Send server info')
        .setDMPermission(false),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction intraction
     */
    async run(interaction) {

        try {
            const serverembed = new EmbedBuilder()

                .setAuthor({
                    name: `Server info for ${interaction.guild.name}`,
                    iconURL:
                        `${interaction.guild.iconURL({ dynamic: true, size: 512 })}`
                })
                .setColor('Random')
                .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 512 }))
                .addFields(
                    {
                        name: 'General',
                        // eslint-disable-next-line max-len
                        value: `\n**Servername Name:** ${interaction.guild.name} \n**ID:** ${interaction.guild.id}`
                    },
                    {
                        name: 'Statistics',
                        // eslint-disable-next-line max-len
                        value: `\n** Role Count:** ${interaction.guild.roles.cache.size}\n**Member Count:** ${interaction.guild.memberCount}`
                    }
                )
                .setFooter({ text: `Requested by ${interaction.member.user.username}`, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                .setTimestamp();
            interaction.reply({ embeds: [serverembed], ephemeral: false });
        } catch (error) {
            console.log(error);
        }
    }
};
