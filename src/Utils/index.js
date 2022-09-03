const BaseEvent = require('./Structures/Base/BaseEvent');
const BaseCommand = require('./Structures/Base/BaseCommand');
const { registerEvents, registerCommands, registerSlashcommands  } = require('./Structures/Handlers/registry');

module.exports = {
	BaseEvent,
	BaseCommand,
	registerCommands,
	registerEvents,
	registerSlashcommands
}