const {Client, MessageEmbed} = require('discord.js');
/require('dotenv').config();/

const client = new Client();
client.on('ready', () => {
client.user.setUsername('ZarahBot')
  console.log('I am ready!');
});
client.on('message', message => {
	
	if (message.content == 'retard'){
		message.channel.send('yes?')
	}
	if (message.content == 'goodnight' || message.content == 'Goodnight' || message.content == 'good night'){
		message.channel.send(`Goodnight <@${message.author.id}>`)
	}
	if (message.content == 'goodmorning' || message.content == 'Goodmorning' || message.content == 'good morning'){
		message.channel.send(`Good morning <@${message.author.id}>`)
	}
// 	message.channel.messages.fetch({ limit: 4 }).then(messages =>{let arr = messages.array();
// 	let contents = messages.map(message => message.content);
// 	if (contents[0] == contents[1] && contents[1] == contents[2] && contents[2] == contents[3]){
// 		if (message.author.bot){return;}
// 		console.log('spam');
// 		message.channel.send('shut the fuck up stop');
// 	}


// });
});
client.on('guildMemberAdd', member => {
	console.log('User joined');
	  const channel = member.guild.channels.cache.find(ch => ch.id === '492801248492519444');
	  let jembed = new MessageEmbed()
	  .setDescription(`Welcome, <@${member.user.id}>. Be sure to head to #rule-n-colors to pick a color and read our singular rule.`)
	  .setColor('#91ffba')
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
	  .setColor('#557061')
	  .setThumbnail(member.user.displayAvatarURL())
	  channel.send(lembed);
	  client.users.cache.get(member.guild.ownerID).send(`${member} has left.`);

	 
});
	  
client.login(process.env.BOT_TOKEN);