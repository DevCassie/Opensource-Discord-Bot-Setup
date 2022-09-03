const { BaseEvent } = require('../../Utils/index.js');

module.exports = class InteractionCreateEvent extends BaseEvent {
	constructor() {
		super({
			name: 'interactionCreate',
			enabled: true,
			once: false
		});	
	}

	async run (client, interaction) {
		const slashcommand = client.slashcommands.get(interaction.commandName);
		if ( !slashcommand ) return;

		try {
			if ( interaction.isChatInputCommand() ) {
				await slashcommand.execute(client, interaction);
			}
		} catch ( error ) {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			console.error(error);
		} finally {
			console.info('Interaction executed.');
		}
	}
}