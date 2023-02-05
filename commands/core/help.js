const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    description: "Tất cả lệnh của con bot ngu!",
    showHelp: false,

    execute({ client, inter }) {
        const commands = client.commands.filter(x => x.showHelp !== false);

        const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }) })
        .setDescription('Chương trình này được dựa theo ZerioDev [ZerioDev/Music-bot](https://github.com/ZerioDev/Music-bot).\n.')
        .addFields([ { name: `Đã được bật - ${commands.size}`, value: commands.map(x => `\`${x.name}\``).join(' | ') } ])
        .setTimestamp()
        .setFooter({ text: 'Bot nhạc nghiệp dư được tạo bởi Sói ngu❤️', iconURL: inter.member.avatarURL({ dynamic: true })});

        inter.reply({ embeds: [embed] });
    },
};