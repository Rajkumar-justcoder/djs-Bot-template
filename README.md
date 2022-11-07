 # DJS BOT TEMPLATE

A Discord bot template based on discordjs@latest.

### About
- 🏁 A Stater Discord bot template based on JavaScript.
- 🏠 Currently by default its Global Slash ( `/` ) command.

## Run locally 

1. Clone the repository and run the following to install the dependencies ( use any package manager you like ):
    ```bash
    npm install
    ```

2. Create `.env` file in the root directory and add the discord token created at **Discord Dev Portal** in this format:

    ```bash
    TOKEN=Your bot Token here
    PRIVATEGUILD= guild id here
    MONGODBURL= mongo db url
    ```

> **NOTE**
>
> -  Mongo db URL is optional. If you don't need it, then remove code from `src/events/client/ready.js` file and remove the import as well. Then uninstall mongoose package and also remove pongoose package.
>
> - If you want the code to be kept for a future mongo db connection then let it be there for later use and instead, remove the imports in that file and uninstall packages.


3. Start your bot:
    ```bash
    node .
    ```

## Screenshots

![A Console log of commands loaded](/screenshorts/console.png)

If any default errors found while registering commands, it will show here: 
![A Erros log if any any default error found ](/screenshorts/logwitherrors.png)

![Sample ping command](/screenshorts/ping.png)


## How to add Commands
- Coming soon.

## What is Discord.js?
- Discord.js is a powerful Node.js  module that allows you to interact with the Discord API  very easily. It takes a much more object-oriented approach than most other JS Discord libraries, making your bot's code significantly tidier and easier to comprehend.
- Usability, consistency, and performance are key focuses of discord.js, and it also has nearly 100% coverage of the Discord API. It receives new Discord features shortly after they arrive in the API.
- Discord.js definition credit : https://discord.js.org/#/

## Discord.js links for reference
- https://discord.js.org/#/
- https://discord.com/developers/docs/intro
- https://discordjs.guide/#before-you-begin
- https://www.npmjs.com/package/discord.js
- https://github.com/discordjs