// Packages...
require('dotenv').config();
const { Client, Collection } = require('discord.js');
// Files...
const { prefix } = require('./Config/config.json');
const { registerCommands } = require('./Utils/Structures/index.js');
// Creating the client.
const client = new Client();
// Creating a new commands collection.
client.commands = new Collection();

(async () => {
	// Registering the commands.
	await registerCommands(client, '../../../Commands/').then(() => console.info('Commands fully loaded.')).catch(error => console.error(error));
})();

// This will get called when the client is ready. You could add a presence here.
client.on('ready', () => console.info('Client succesfully connected.'));
// This will get triggered every time a message is send.
client.on('message', async (message) => {
	// Ignore the bots and the messages that don't start with the prefix.
	if (message.author.bot || message.content.indexOf(prefix) !== 0) return;
	// Here we destructure message.content to define which is the command name and which the arguments.
	const [commandName, ...args] = message.content.slice(prefix.length).split(/\s+/);
	// Fetch the command with the given command name.
	const command = await client.commands.get(commandName.toLowerCase()) || await client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName.toLowerCase()));

	try {
		// Bind the client, message and args object to the commands run function. THIS IS IMPORTANT.
		command.run(client, message, args);
	} catch (error) {
		return console.error(error);
	}
});
// Login the client, this will allow your bot to handle every api request.
client.login(process.env.TOKEN);