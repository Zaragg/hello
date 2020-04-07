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
	  .setColor(0xff0000)
	  .setThumbnail(member.displayAvatarURL())

	  channel.send(embed);
});
	  //channel.send(`W`Welcome, <@${member.user.id}>.`
client.login(process.env.BOT_TOKEN);