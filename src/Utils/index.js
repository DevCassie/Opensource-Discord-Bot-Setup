const BaseEvent = require('./Structures/Base/BaseEvent');
const BaseCommand = require('./Structures/Base/BaseCommand');
const registerCommands = require('./Structures/Handlers/registry').registerCommands;
const registerEvents = require('./Structures/Handlers/registry').registerEvents;

module.exports = {
	BaseEvent,
	BaseCommand,
	registerCommands,
	registerEvents
}