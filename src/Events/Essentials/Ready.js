const { BaseEvent } = require('../../Utils/Structures/index.js');

module.exports = class ReadyEvent extends BaseEvent {
	constructor() {
		super({
			name: 'ready',
			enabled: true,
			once: true
		});	
	}

	async run (client) {
		console.info('Client is online')	
	}
}