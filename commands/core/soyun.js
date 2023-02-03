const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "soyun",
  aliases: ["soyun"],
  showHelp: false,
  utilisation: "{prefix}soyun",

  execute(client, message, args) {
    const embed = new MessageEmbed();

    embed.setColor("BLUE");
    embed.setAuthor(
      client.user.username,
      client.user.displayAvatarURL({ size: 1024, dynamic: true })
    );

    const commands = client.commands.filter((x) => x.showHelp !== false);

    embed.setAuthor('Hmmm... ')
    embed.setColor(3447003)
        embed.setImage(`https://media.tenor.com/I_eg_kaGJEoAAAAC/highschool-dxd-rias-gremory.gif`)
   


    message.channel.send({ embeds: [embed] });
  },
};