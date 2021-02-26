// Import the BaseCommand class, so we can extend this class with our new command class.
const { BaseCommand } = require('../../Utils/Structures/index.js');

module.exports = class PingCommand extends BaseCommand {
	constructor() {
		// These are the options for our command. The name is ping, and aliases are p and pong. 
		super({
			name: 'ping',
			category: 'miscellaneous',
			aliases: ['p', 'pong']
		})
	}

	// This will execute once the command has been used.
	run(client, message, args) {
		message.channel.send('Test');
	}
}