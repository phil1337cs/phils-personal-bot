const Discord = require('discord.js);
const client = new Discord.Client();

client.on('Bereit', () => {
  console.log('Ich bin bereit!');
  
});

client.on('message', message => {

  if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !bot
            case 'bot':
                bot.sendMessage({
                    to: channelID,
                    message: 'Dieser Bot wurde von Philipp Kowalski erstellt!'
                });
            break;
            
           }
     }
});
