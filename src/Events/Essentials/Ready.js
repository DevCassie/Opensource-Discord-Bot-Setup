const BaseEvent = require('../../Utils/Structures/Base/BaseEvent.js');

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