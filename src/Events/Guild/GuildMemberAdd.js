const {BaseEvent} = require('../../Utils/Structures/index.js');

const Discord = require('discord.js');

module.exports = class GuildMemberAdd extends BaseEvent {
    super({
      name: 'GuildMemberAdd',
      enabled: 'true',
      once: true
    })
}

  async run (client) {
      const welcomeChannel = message.guild.channels.find(c => c.name === 'welcome');
      message.channel.send("Welcome into our server, \n We hope you enjoy your stay with us");
  }
}
