const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "rias-yardım",
  aliases: ["rias-yardım"],
  showHelp: false,
  utilisation: "{prefix}help",

  execute(client, message, args) {
    const embed = new MessageEmbed();

    embed.setColor("BLUE");
    embed.setAuthor(
      client.user.username,
      client.user.displayAvatarURL({ size: 1024, dynamic: true })
    );

    const commands = client.commands.filter((x) => x.showHelp !== false);

    embed.setColor("RANDOM")
    embed.setTitle(
      "**▬▬▬▬▬▬[** ©️ **» Rias Bot** ©️ **]▬▬▬▬▬▬**  **  **Prefixim: `R!`"
    )
    embed.setThumbnail(
      "https://pandatoryu.files.wordpress.com/2013/03/highschool-dxd-gif-de-neogohann-visite-pandatoryu.gif"
    )
    embed.setDescription(
      `

**▬▬▬▬▬▬▬[** :closed_lock_with_key:  **Komut Listesi**   :closed_lock_with_key: **]▬▬▬▬▬▬**

> **» R!nasıl :** İssei Nasılım
> **» R!kiss :** Mmmm Benim Küçük İsseim...


**▬▬▬▬▬▬▬[** :gear:  **Bilgilendirme**  :gear: **]▬▬▬▬▬▬**

> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :open_file_folder: **Rias Botu Flickr tarafından tasarlanmış daha sonra geliştirilmiş Eğlence botudur()**
> :round_pushpin: **Komut hakkında detaylı bilgi için: R!yardım**
> :bulb: **Discord Js Sürümü: 12.4.0 **

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/JHMXGETfVX)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=1063207275449307197&scope=bot&permissions=8)** **•** **[Web-Site]( )**
`
    )

    embed.setFooter(client.user.username + "", client.user.avatarURL)
    embed.setTimestamp();

    embed.setTimestamp();
    embed.setFooter(
      "Müzik Botu Komutları",
      message.author.avatarURL({ dynamic: true })
    );

    message.channel.send({ embeds: [embed] });
  },
};