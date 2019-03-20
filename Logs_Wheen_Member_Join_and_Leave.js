//Logs ween member join Server & leave server
bot.on('guildMemberAdd', member => {
let logChannel = member.guild.channels.find('name', 'tk-logs');

  let logEmbed = new Discord.RichEmbed()
  .setAuthor(`${member.user.username} Has joined server now!`, member.user.displayAvatarURL) 
  .setColor('GREEN')
  .addField(`*__${member.guild.name}__* Get new members now!`,`Welcome **__${member.user.username}__** to server: \`${member.guild.name}\`\ enjoy with your new friend here ðŸ˜‰`)
  .addField(`Detail this member`,`Name: __${member.user.username}__ \nDiscrim: __${member.user.discriminator}__ \nID: __${member.user.id}__ \nTag: __${member.user.tag}__ \nMentions: __<@${member.user.id}>__`)
  .setThumbnail(member.user.displayAvatarURL)
  .setFooter(`| Member of this server now have [ ${member.guild.members.size} ]`,`https://cdn.discordapp.com/attachments/555238319815000084/556322732783173633/emote.png`)
  .setTimestamp()
  return logChannel.send(logEmbed);
})
bot.on('guildMemberRemove', member => {
let logChannel = member.guild.channels.find('name', 'tk-logs');

  let logEmbed = new Discord.RichEmbed()
  .setAuthor(`${member.user.username}, Has leaved server`, member.user.displayAvatarURL)
  .setColor('RED')
  .addField(`*__${member.guild.name}__* Has lost a member now!`,`Goodbye **__${member.user.username}__**  from \`${member.guild.name}\`\ see you next time ðŸ˜¥`)
  .addField(`Deatil this member`,`Name: __${member.user.username}__ \nDiscrim: __${member.user.discriminator}__ \nID: __${member.user.id}__ \nTag: __${member.user.tag}__`)
  .setThumbnail(member.user.displayAvatarURL)
  .setFooter(`| Member of this server now have [ ${member.guild.members.size} ]`,`https://cdn.discordapp.com/attachments/555238319815000084/556322707013238784/emote.png`)
  .setTimestamp()
  return logChannel.send(logEmbed);
})