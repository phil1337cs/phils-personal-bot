const Discord = require('discord.js);
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === '!bot') {
    message.reply('Dieser Bot wurde von Philipp Kowalski am 10.02.2018 erstellt. Viel Spaß auf meinem Server!');
  }
});

 client.login(process.env.BOT_TOKEN);
