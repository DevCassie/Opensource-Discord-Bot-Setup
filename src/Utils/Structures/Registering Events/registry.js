// Packages...
const path = require('path');
const fs = require('fs').promises;
// Files...
const { BaseCommand } = require('../index.js');

// This is the function to register commands to the client.
async function registerCommands(client, dir = '') {
	// Define what the file path is.
	const filePath = path.join(__dirname, dir);
	// Read the files from the file path.
	const files = await fs.readdir(filePath);

	try {
		for (const file of files) {
			// Fetching data from the found items in the Filepath.
			const stat = await fs.lstat(path.join(filePath, file));

			// If the found item is a directory run this function again.
			if (stat.isDirectory()) registerCommands(client, path.join(dir, file));

			// If the file endsWith.js it's a command.
			if (file.endsWith('.js')) {
				const Command = require(path.join(filePath, file));

				if (Command.prototype instanceof BaseCommand) {
					// Create a new command.
					const command = new Command();
					// Set the command in the commands collection we created in the index.js
					client.commands.set(command.name, command);
				}
			}
		}
	} catch (error) {
		// If there is an error, it wil console log the error.
		console.error(error);
	}
}

module.exports = {
	registerCommands
}