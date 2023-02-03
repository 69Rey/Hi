const Discord = require("discord.js");

exports.run = (client, message) => {
  const EmbedNarcosCode = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle(
      "**▬▬▬▬▬▬[** ©️ **» Akeno Bot** ©️ **]▬▬▬▬▬▬**  **  **Prefixim: `UWU!`"
    )
    .setThumbnail(
      "https://media.tenor.com/Q3hXgsRIcswAAAAM/akeno-himejima.gif"
    )
    .setDescription(
      `

**▬▬▬▬▬▬▬[** :closed_lock_with_key:  **Komut Listesi**   :closed_lock_with_key: **]▬▬▬▬▬▬**

> **» UWU!moderasyon :** Moderasyon komudları görüntüler.
> **» UWU!kullanıcı :** Userler için açık komudlar...
> **» UWU!eğlence :** Sizi biraz eğlendirir.
> **» UWU!eğlence2 :** size güzel komudlarımı göstereyim sizi eğlendirecek...
> **» UWU!logo :** İstediniz şekillerde bi logo oluşturabilirsiniz...
> **» UWU!logo2 :**logo2 kamutlarıyla sizlerle...
> **» UWU!akenoyardim :**logo2 Bota Özel komutlar...

**▬▬▬▬▬▬▬[** :gear:  **Bilgilendirme**  :gear: **]▬▬▬▬▬▬**

> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :open_file_folder: **Akeno Botu Flickr tarafından tasarlanmış daha sonra geliştirilmiş Eğlence botudur()**
> :round_pushpin: **Komut hakkında detaylı bilgi için: UWU!yardım**
> :bulb: **Discord Js Sürümü: 12.4.0 **

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/JHMXGETfVX)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=1050070635906351275&scope=bot&permissions=8)** **•** **[Web-Site]( )**
`
    )

    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(EmbedNarcosCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Botun Komut Listesini Gösterir!",
  usage: "UWU!yardım"
};
