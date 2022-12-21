```js
const { Client } = require('discord.js');

module.exports = {
    name: 'interactionCreate', // name of events 
    /**
     * @param { Client } client client use
     */
    async run(interaction, client) {  
            // your code what to do with that event 
    }
};
```

`interaction` will be the event paramaters u get from it,
like if event is guildMemberAdd then u will get member as a paramater 
if its memberupdate or any thing which gives u 2 value/paramater from event then it will be always at first 
and `client` will be always at last in params value aka
```js
async run(oldPresence, newPresence, client){
    // here memberpresence update  event have 2 parameters so it will be like this  any thing but client will be at last of it and if it get switch then it will property will change so ...
} 
```