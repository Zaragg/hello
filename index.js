const Discord = require('discord.js');
/require('dotenv').config();/

const client = new Discord.Client();
client.on('ready', () => {
  console.log('I am ready!');
});
client.on('message', message => {
	if (message.content === 'nigger'){
		message.channel.send('no u');
	} 
});
client.on('guildMemberAdd', member => {
	  const channel = member.guild.channels.cache.find(ch => ch.id === '492801248492519444');
	  channel.send('Welcome, <@${member.user.id}>');
});

client.login(process.env.BOT_TOKEN);
