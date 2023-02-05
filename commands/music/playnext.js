const { ApplicationCommandOptionType } = require('discord.js');
const { QueryType } = require('discord-player');

module.exports = {
    name: 'playnext',
    description: "Bài hát tiếp theo bạn muốn",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'Bài hát tiếp theo bạn muốn',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ],

    async execute({ inter }) {
	await inter.deferReply();
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.editReply({ content: `Không có bài hát nào đang được phát ${inter.member}... hãy thử lại ? ❌`, ephemeral: true });

        const song = inter.options.getString('song');

        const res = await player.search(song, {
            requestedBy: inter.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return inter.editReply({ content: `Không tìm thấy kết quả ${inter.member}... thử lại ? ❌`, ephemeral: true });

       if (res.playlist) return inter.editReply({ content: `This command dose not support playlist's ${inter.member}... try again ? ❌`, ephemeral: true });

        queue.insert(res.tracks[0], 0)

        await inter.editReply({ content:`Track has been inserted into the queue... it will play next 🎧`});

    }
}
