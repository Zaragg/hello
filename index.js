const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('I am ready!');
});
client.on('message', message => {
	if (message.content === 'nigger'){
		message.channel.send('no u');
	} 
});
client.login('NDUxMTAxODM0MzU5MzQxMDc3.XotwfA._mGgzAklzLcD58we8sJvspwmveg');
