const { QueryType } = require('discord-player');

module.exports = {
    name: 'play',
    aliases: ['p',"başlat"],
    utilisation: '{prefix}play [song name/URL]',
    voiceChannel: true,

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`${message.author}, Çalmasını istediğiniz müziğin ismini yazınız!`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`${message.author}, Sonuç bulunamadı!`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`${message.author}, Ses kanalına katılamıyorum, kanalı rolüme göre ayarlaman gerek.`);
        }

        await message.channel.send(`Müzik Yükleniyor... 🎧`);

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};