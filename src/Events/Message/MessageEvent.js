require('dotenv').config();
const BaseEvent = require('../../Utils/Structures/Base/BaseEvent.js');

module.exports = class ReadyEvent extends BaseEvent {
	constructor() {
		super({
			name: 'message',
			enabled: true,
			once: false
		});	
	}

	async run (client, message) {
		// Ignore the bots and the messages that don't start with the prefix.
		if (message.author.bot || message.content.indexOf(process.env.PREFIX) !== 0) return;
		// Here we destructure message.content to define which is the command name and which the arguments.
		const [commandName, ...args] = message.content.slice(process.env.PREFIX.length).split(/\s+/);
		// Fetch the command with the given command name.
		const command = await client.commands.get(commandName.toLowerCase()) || await client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName.toLowerCase()));

		try {
			// Bind the client, message and args object to the commands run function. THIS IS IMPORTANT.
			command.run(client, message, args);
		} catch (error) {
			return console.error(error);
		}
	}
}