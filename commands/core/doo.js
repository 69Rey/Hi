const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "nasıl",
  aliases: ["nasıl", "doo", "nasılım"],
  showHelp: false,
  utilisation: "{prefix}nasıl",

  execute(client, message, args) {
    const embed = new MessageEmbed();

    embed.setColor("BLUE");
    embed.setAuthor(
      client.user.username,
      client.user.displayAvatarURL({ size: 1024, dynamic: true })
    );

    const commands = client.commands.filter((x) => x.showHelp !== false);

    embed.setAuthor('İssei Nasılım ')
    embed.setColor(3447003)
        embed.setImage(`https://64.media.tumblr.com/66b8361fd62cf276ae29ebe3b67ed902/tumblr_n386i1QFvY1tocpl8o1_500.gif`)
   


    message.channel.send({ embeds: [embed] });
  },
};