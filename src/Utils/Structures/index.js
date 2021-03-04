// This file is used to export the custom classes and function with just one single file.
// Base
module.exports.BaseEvent = require('./Base/BaseEvent.js');
module.exports.BaseCommand = require('./Base/BaseCommand.js');
// Registry
module.exports.registerEvents = require('./Registering Events/registry.js').registerEvents;
module.exports.registerCommands = require('./Registering Events/registry.js').registerCommands;