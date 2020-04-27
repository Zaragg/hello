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
	if (message.content == 'retard'){
		message.channel.send('yes?')
	}
	message.channel.messages.fetch({ limit: 4 }).then(messages =>{let arr = messages.array();
	let contents = messages.map(message => message.content);
	if (contents[0] == contents[1] && contents[1] == contents[2] && contents[2] == contents[3]){
		console.log('spam');
		message.channel.send('shut the fuck up stop spamming');
	}
});
});
client.on('guildMemberAdd', member => {
	  const channel = member.guild.channels.cache.find(ch => ch.id === '578364203090575362');
	  let jembed = new MessageEmbed()
	  .setDescription(`Welcome, <@${member.user.id}>.`)
	  .setColor('#FF7878')
	  .setThumbnail(member.user.displayAvatarURL())

	  channel.send(jembed);
});
client.on('guildMemberRemove', member => {
	  const channel = member.guild.channels.cache.find(ch => ch.id === '578364203090575362');
	  let lembed = new MessageEmbed()
	  .setDescription(`Goodbye, <@${member.user.id}>.`)
	  .setColor('#000000')
	  .setThumbnail(member.user.displayAvatarURL())

	  channel.send(lembed);
	 
});
	  
client.login(process.env.BOT_TOKEN);