// THis is our base command. Every command should be a extended basecommand, so that every command has the same options.
module.exports = class BaseCommand {
	constructor(options) {
		this.name = options.name,
		this.category = options.category
		this.aliases = options.aliases
	}
}