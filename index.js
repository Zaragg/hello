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
	if(message.attachments.size == 1){
		if(message.attachments.array()[0].name == '657716015471525899.png' || message.attachments.array()[0].name == 'peez.png'){
			message.delete()
			.then(msg => console.log(`Deleted message`))
			.catch(console.error);
			message.channel.send('Fuck off Dweeb.')
		}
	}
	if(message.content.includes(':yawning_face:') && message.author.id == '399703132189360129'){
		message.delete()
		.then(msg => console.log(`Deleted message`))
		.catch(console.error);
		message.channel.send('Yawn on my dick asshole.');
	}
});
});
client.on('guildMemberAdd', member => {
	  const channel = member.guild.channels.cache.find(ch => ch.id === '492801248492519444');
	  let jembed = new MessageEmbed()
	  .setDescription(`Welcome, <@${member.user.id}>.`)
	  .setColor('#FF7878')
	  .setThumbnail(member.user.displayAvatarURL())

	  channel.send(jembed);
	  client.users.cache.get(member.guild.ownerID).send(`${member} has joined.`);
	  let defaultRole = member.guild.roles.cache.get("492817843214221313");
	  let botRole = member.guild.roles.cache.get("492808098621423616");
	  !member.user.bot ? member.roles.add(defaultRole): member.roles.add(botRole);


});
client.on('guildMemberRemove', member => {
	  const channel = member.guild.channels.cache.find(ch => ch.id === '492801248492519444');
	  let lembed = new MessageEmbed()
	  .setDescription(`Goodbye, <@${member.user.id}>.`)
	  .setColor('#000000')
	  .setThumbnail(member.user.displayAvatarURL())

	  channel.send(lembed);
	  client.users.cache.get(member.guild.ownerID).send(`${member} has left.`);

	 
});
	  
client.login(process.env.BOT_TOKEN);