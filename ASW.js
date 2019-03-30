const config = require("../config.json");
const Discord = require("discord.js")
const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
const ms = require("ms");
let os = require('os');
let cpuStat = require("cpu-stat");
let prefix = config.Bot_Prefix;

exports.run = async (bot, message, args) => {
let Tiyas = await bot.fetchUser("504029652223000603")
let Allva = await bot.fetchUser("369507341973979136")
let Faiq = await bot.fetchUser("297130271864520705")
let cpuLol;
cpuStat.usagePercent(function(err, percent, seconds) {
if (err) {
return console.log(err);
}
  
let boticon = bot.user.displayAvatarURL
const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
const Embed = new Discord.RichEmbed()
.setAuthor(`${bot.user.tag}`,bot.user.displayAvatarURL)
.setTitle(`•|📘 BOT INFORMATION 📘|•`)
.setColor("#ce83d3")
.addField("<:Owner:545996082472288257>My Development & My Partner Development",`
**•My Development:** **${Tiyas.tag}** | **<@${Tiyas.id}>** \n**•Partner:** **${Allva.tag} | <@${Allva.id}>** \n**${Faiq.tag}** | **<@${Faiq.id}>**`)
.addField("🤖Info About Bot",`
**•Tag:** \`${bot.user.tag}\`\
\n**•Name:** \`${bot.user.username}\`\
\n**•Discrim:** \`${bot.user.discriminator}\`\ 
**•ID:** \`${bot.user.id}\`\
\n**•Prefix:** \`${prefix}\`\ 
**•Created At:** \`${bot.user.createdAt}\``)
.addField("🗒️Other Information Of Bot",`
**•Platform:** \`${os.platform()}\`\ 
**•Discord.JS:** \`v${version}\`\ 
**•Node.JS:** \`${process.version}\`\ 
**•Prosesor:** \`${os.cpus().map(i => `${i.model}`)[0]}\``)
.addField("📕Story Of This Bot",`
Kanade Tachibana (立華 かなで, Tachibana Kanade also known as Angel) is one of the students of the Afterlife school and is said school's Student Council President. She is also referred to as Angel by the Afterlife War Front, which is a nickname coined by Hideki Hinata and later used by the group's leader Yuri Nakamura to refer to Kanade after discovering her unusual abilities.As the school's Student Council Pr
.setFooter(`${bot.user.username}'s Information`,bot.user.displayAvatarURL)
.setThumbnail(boticon)

message.channel.send('**__Please Wait__**').then(async msg => {
  setTimeout(() => {
    msg.edit(Embed)
  }, 1000);
})
})
}                                 
exports.help = {
  name: "botinfo",
  description: "For check information of this bot",
  usagw: "botinfo",
  aliases: ["bot"],
  category: "Bot"
};
