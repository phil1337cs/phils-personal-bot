const Discord = require('discord.js');
const client = new Discord.Client();

client.on('bereit', () => {
  console.log('Ich bin bereit');
});

client.on('message', message => {
  if (message.content === '!bot') {
    message.reply('Dieser Bot wurde von phil1337 am 10.02.2018 erstellt. Viel Spaß auf diesem Server!');
  }
});

 client.login(process.env.BOT_TOKEN);
