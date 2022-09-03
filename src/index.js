// Packages...
require('dotenv').config();
const { Client, Collection, GatewayIntentBits } = require('discord.js');
// Files...
const { registerCommands, registerEvents, registerSlashcommands } = require('./Utils/index.js');
// Creating the client and accessing the neccesary intents for your bot.
const client = new Client({ 
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildBans,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildEmojisAndStickers,
	]
});
// Creating a new commands & slashcommands collection.
client.commands = new Collection();
client.slashcommands = new Collection();

(async () => {
	// Registering the handlers.
	await registerCommands(client, '../../../Commands').then(() => console.info('Commands fully loaded.')).catch((error) => console.error(error));
	await registerEvents(client, '../../../Events').then(() => console.info('Events fully loaded.')).catch((error) => console.error(error));
	await registerSlashcommands(client, '../../../Slashcommands').then(() => console.info('Slashcommands succesfully loaded.')).catch((error) => console.error(error));
})();

// Login the client, this will allow your bot to handle every api request.
client.login(process.env.TOKEN);