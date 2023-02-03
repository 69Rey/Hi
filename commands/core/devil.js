const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "devil",
  aliases: ["devil", "prenses", "şeytan"],
  showHelp: false,
  utilisation: "{prefix}devil",

  execute(client, message, args) {
    const embed = new MessageEmbed();

    embed.setColor("BLUE");
    embed.setAuthor(
      client.user.username,
      client.user.displayAvatarURL({ size: 1024, dynamic: true })
    );

    const commands = client.commands.filter((x) => x.showHelp !== false);

    embed.setAuthor('İssei Benmi o mu ')
    embed.setColor(3447003)
        embed.setImage(`https://i.pinimg.com/originals/62/0f/23/620f23dba80ba3c2b53e180a0291eab3.gif`)
   


    message.channel.send({ embeds: [embed] });
  },
};