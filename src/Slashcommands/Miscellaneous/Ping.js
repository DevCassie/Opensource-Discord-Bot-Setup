const { ApplicationCommandType } = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Check bot\'s ping',
	type: ApplicationCommandType.ChatInput,
	cooldown: 3000,
	execute: (client, interaction) => {
		interaction.reply({ content: 'Pong' });
	}
}