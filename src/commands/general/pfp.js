/* eslint-disable no-empty-function */
const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');
const { User } = ApplicationCommandOptionType;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pfp')
        .setDescription('display user profile image')
        .addUserOption((option) =>
            option.setName('user').setDescription('User to display profile').setRequired(true)
        )
        .setDMPermission(false),
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
        } catch (error) {
            console.log(error);
        }
    }
};
