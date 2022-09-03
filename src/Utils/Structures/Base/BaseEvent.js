// THis is our base command. Every command should be a extended basecommand, so that every command has the same options.
module.exports = class BaseEvent {
	constructor(options) {
		this.name = options.name,
		this.enabled = options.enabled;
		this.once = options.once;
	}
}