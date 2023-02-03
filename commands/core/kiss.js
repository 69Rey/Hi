const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "kiss",
  aliases: ["op", "öp", "isseiöp"],
  showHelp: false,
  utilisation: "{prefix}öp",

  execute(client, message, args) {
    const embed = new MessageEmbed();

    embed.setColor("BLUE");
    embed.setAuthor(
      client.user.username,
      client.user.displayAvatarURL({ size: 1024, dynamic: true })
    );

    const commands = client.commands.filter((x) => x.showHelp !== false);

    embed.setAuthor('İssei`m benim küçük issei`m ')
    embed.setColor(3447003)
        embed.setImage(`https://media.tenor.com/dFI4OPz6_LcAAAAC/contrato-rias-x-issei.gif`)
   


    message.channel.send({ embeds: [embed] });
  },
};