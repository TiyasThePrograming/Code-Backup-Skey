//Logs ween message delete from member on Server
bot.on('messageDelete', async (message) => {
    const logs = message.guild.channels.find('name', 'tk-logs');
    const entry = await message.guild.fetchAuditLogs({
        type: 'MESSAGE_DELETE'
    }).then(audit => audit.entries.first())
    let user;
    if (entry.extra.channel.id === message.channel.id && (entry.target.id === message.author.id) && (entry.createdTimestamp > (Date.now() - 5000)) && (entry.extra.count >= 1)) {
        user = entry.executor.username
    } else {
        user = message.author
    }
    const logembed = new Discord.RichEmbed()
    .setAuthor(`${user.tag}, Has Deleted Message`, message.author.displayAvatarURL)
    .addField('â€¢ðŸ’¬ | Message Send By',`<@${message.author.id}>`)
    .addField('â€¢ðŸ“¡ | On Channel',`<#${message.channel.id}>`)
    .addField('â€¢ðŸ“ | Content',`${message.content}`)
    .setThumbnail(message.author.displayAvatarURL)
    .setColor(message.guild.member(bot.user).displayHexColor)
    .setFooter(`ðŸ—‘ï¸ | Message Deleted At `)
    .setTimestamp()
    logs.send(logembed);
})
/.setTimestamp(new Date());
	logs.send(cembed)
});
