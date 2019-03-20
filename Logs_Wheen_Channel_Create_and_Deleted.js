//Logs ween channel has been Created
bot.on("channelCreate", async channel => {
	var logs = channel.guild.channels.find(c => c.name === 'tk-logs');
	if (!logs) return console.log("Tiyas Aku Tidak Bisa Menumunkan Channel katou-megumi-loogging");
	const cembed = new Discord.RichEmbed()
		.setTitle(`ðŸ”§ | Channel Created At : ${channel.guild.name}`)
		.setColor("GREEN")
		.setDescription(`\`${channel.type}\ channel\`\ by the name of __${channel.name}__, was just created!`)
    .setThumbnail(channel.guild.iconURL)
		.setTimestamp(new Date());
	logs.send(cembed)
});
bot.on("channelDelete", async channel => {
  var logs = channel.guild.channels.find(c => c.name === 'tk-logs');
	if (!logs) return console.log("Tiyas Aku Tidak Bisa Menemukan Channel katou-megumi-logging");
	const cembed = new Discord.RichEmbed()
		.setTitle(`ðŸ—‘ï¸ | Channel Delete At : ${channel.guild.name}`)
		.setColor("RED")
		.setDescription(`\`${channel.type} channel\`\, by the name of __${channel.name}__, was just deleted!`)
    .setThumbnail(channel.guild.iconURL)
		.setTimestamp(new Date())
	logs.send(cembed)
});