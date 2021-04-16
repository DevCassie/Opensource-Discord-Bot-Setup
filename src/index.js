// Packages...
require('dotenv').config();
const { Client, Collection } = require('discord.js');
// Files...
const { registerCommands, registerEvents } = require('./Utils/index.js');
// Creating the client.
const client = new Client();
// Creating a new commands collection.
client.commands = new Collection();

(async () => {
	// Registering the commands.
	await registerCommands(client, '../../../Commands').then(() => console.info('Commands fully loaded.')).catch(error => console.error(error));
	await registerEvents(client, '../../../Events').then(() => console.info('Events fully loaded.')).catch(error => console.error(error));
})();

// Login the client, this will allow your bot to handle every api request.
client.login(process.env.TOKEN);