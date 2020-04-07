const {Client, MessageEmbed} = require('discord.js');
/require('dotenv').config();/

const client = new Client();
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
	  let embed = new MessageEmbed()
	  .setDescription(`Welcome, <@${member.user.id}>.`)
	  .setColor(#FF7878)
	  .setThumbnail(member.avatarURL)

	  channel.send(embed);
});
client.on('guildMemberRemove', member => {
	  const channel = member.guild.channels.cache.find(ch => ch.id === '492801248492519444');
	  let embed = new MessageEmbed()
	  .setDescription(`Goodbye, <@${member.user.id}>.`)
	  .setColor(#000000)
	  .setThumbnail(member.avatarURL)

	  channel.send(embed);
});
	  
client.login(process.env.BOT_TOKEN);