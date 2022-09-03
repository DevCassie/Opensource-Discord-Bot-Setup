const { ActivityType } = require('discord.js'); 
const { BaseEvent } = require('../../Utils/index.js');

module.exports = class ReadyEvent extends BaseEvent {
	constructor() {
		super({
			name: 'ready',
			enabled: true,
			once: true
		});	
	}

	async run (client) {
		console.info('Client is online');
		client.user.setPresence({ activities: [ { name: `Over servers`, type: ActivityType.Watching } ], status: 'online' })
	}
}