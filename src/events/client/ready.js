const { Client } = require('discord.js');
const { default: mongoose } = require('mongoose');

module.exports = {
    name: 'ready',
    once: true,
    /**
     *
     * @param {Client} client client acccess
     */
    run(client) {

        const activities = [
            `Hey, I am Currently been Developed`,
            `How are you?`
        ];

        let timechange = 0;
        setInterval(() => client.user.setActivity(`${activities[timechange++ % activities.length]}`, { type: 'WATCHING' }), 15000);

        console.log(`Logged in as ${client.user.tag}`);

        if (!client.config.MONGODBURL) return;
        mongoose.set('strictQuery', false).connect(client.config.MONGODBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log(`${client.user.tag} Bot connected to Database!!`);
        }).catch((err) => {
            console.log(err);
        });
    }
};
