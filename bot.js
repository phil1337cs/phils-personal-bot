const Discord = require('discord.js');
const client = new Discord.Client();

client.on('bereit', () => {
  console.log('Der Bot ist bereit');
});

client.on('message', message => {
  if (message.content === '!bot') 
  {
    message.reply('Dieser Bot wurde von phil1337 am 10.02.2018 erstellt. Viel Spaß auf diesem Server!');
  }
  else if (message.content === '!nrwunited')
  {
    message.reply('\nDas Team NRW-United besitzt derzeit folgendes Lineup: \nphil1337 - IGL/Rifler\nweeaaks - Rifler (Support)\nJigga - Rifler\naimyo - Rifler (entry fragger)\nsmi. - AWPer\n\nProtyx - Rifler (Stand-In)\n\n\nLink zur Steamgruppe: http://steamcommunity.com/groups/nrw-utd \n\n\nLink zur 99-Damage Seite: https://csgo.99damage.de/de/leagues/teams/53733-nrw-united\n\n\nLink zur Facebook Seite: https://www.facebook.com/NRWunitedCSGO/') 
  }
  else if (message.content === '!hilfe')
  {
    message.reply('\n!bot = Infos über den Bot\n!nrwunited = Infos über unser Team\n!hilfe = Liste der Commands')
  }
                
});

 client.login(process.env.BOT_TOKEN);
