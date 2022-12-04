/* eslint-disable no-empty-function */
const { ChatInputCommandInteraction, EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');
const { User } = ApplicationCommandOptionType;

module.exports = {
    name: 'pfp',
    description: 'Display Profile pic',
    options: [
        {
            name: 'user',
            description: 'User to display profile',
            type: User,
            required: true
        }
    ],
    /**
     * @param {ChatInputCommandInteraction} interaction intractions
     */
    async run(interaction) {
        try {
            const { options } = interaction;
            const member = options.getMember('user');

            const useravatar = new EmbedBuilder()
                .setColor('Random')
                .setAuthor({ name: member.user.tag, iconURL: member.user.displayAvatarURL({ dynamic: true, size: 512 }) })
                .setDescription(`[**Avatar Link**](${interaction.user.displayAvatarURL({ dynamic: true })})`)
                .setImage(`${interaction.user.displayAvatarURL({ dynamic: true, size: 512 })}`)
                .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                .setTimestamp();
            interaction.reply({ embeds: [useravatar] }).catch(error => {
                console.log(error);
                interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor(transcolor)
                            .setDescription(`${dcerrorsandwarnings.dcerror} An Error Occured while running this command.`)
                    ]
                });
            });
            console.log(`/avatar used by ${interaction.user}`);

        } catch (error) {
            console.log(error);
        }
    }
};
