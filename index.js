const Discord = require ('discord.js');
const client = new Discord.Client({
    intents: [3243773]
});
const { token } = require('./config.json');


client.on('ready', () => {
    console.log(`Le bot discord : ${client.user.tag} est bien en ligne!`);
});

client.login(token);