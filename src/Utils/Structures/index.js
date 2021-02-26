// This file is used to export the custom classes and function with just one single file.
// Base
module.exports.BaseCommand = require('./Base/BaseCommand.js');
// Registry
module.exports.registerCommands = require('./Registering Events/registry.js').registerCommands;