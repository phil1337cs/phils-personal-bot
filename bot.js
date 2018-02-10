const Discord = require('discord.js');
const client = new Discord.Client();

client.on('bereit', () => {
  console.log('Der Bot ist bereit');
});

client.on('message', message => {
  //if (message.content === '!bot') {
    //message.reply('Dieser Bot wurde von phil1337 am 10.02.2018 erstellt. Viel Spaß auf diesem Server!');
  //}
  
  if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                
});

 client.login(process.env.BOT_TOKEN);
