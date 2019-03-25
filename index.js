//const Discord = require("discord.js");
const fs = require('fs');
//var client = new Discord.Client({disableEveryone: true}) 
//var moment = require ('moment');
//var Discord = require ("discord.js");
//module.exports =  (bot, message, ) => {
var bot = new Discord.Client({disableEveryone: true});
var Discord = require ("discord.js");
var moment = require ("moment");
var express = require('express');
var http = require('http');
var app = express();
bot.commands = new Discord.Collection();

//const Discord = require ("discord.js");
const tokenfile = require('./token.json');
const botconfig = require("./botconfig.json");

//Cmd handler
fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
/*bot.on("guildMemberAdd", member => {
    let guild = member.guild;
    let count = guild.memberCount;
    let total = member.guild.channels.get('513273139757842432');
    let userc = member.guild.channels.get('513273139988267008');
    let botc = member.guild.channels.get('513273140982579203');
    total.setName(`Member's : ${count}`);
    userc.setName(`User's : ${guild.members.filter(m => !m.user.bot).size}`);   
    botc.setName(`Bot's : ${guild.members.filter(m => m.user.bot).size}`);
});

bot.on("guildMemberRemove", member => {
    let guild = member.guild;
    let count = guild.memberCount;
    let total = member.guild.channels.get('513273139757842432');
    let userc = member.guild.channels.get('513273139988267008');
    let botc = member.guild.channels.get('513273140982579203');
    total.setName(`Member's : ${count}`);
    userc.setName(`User's : ${guild.members.filter(m => !m.user.bot).size}`);
    botc.setName(`Bot's : ${guild.members.filter(m => m.user.bot).size}`);
});*/
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

function changing_status() {
    let status = [`Welcome To SpeedForce's WorkSpece™` , `Alvin Bot v.1.0.0` , `${moment().utcOffset('+0700').format("HH:mm A")} WIB`, `${moment().utcOffset('+0800').format("HH:mm A")} WITA`, `${moment().utcOffset('+0900').format("HH:mm A")} WIT`, `Mention Me (@Alvin Bot#7411 )` , `Made By Glitch | Made By Indonesian` , `!a.help | With DiscordBots Devoploment`, `With ${bot.guilds.size.toLocaleString()} Server` , `With ${bot.users.size.toLocaleString()} Users`]
    let random = status[Math.floor(Math.random() * status.length)]
    bot.user.setActivity(random , { type: 'STREAMING', url: `https://www.twitch.tv/speedforce172`});
}
bot.on("ready", () => {
    console.log(`${bot.user.username} : On Server ${bot.guilds.size} And ${bot.users.size.toLocaleString()} Members!`)
  setInterval(changing_status,3500);
})

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received, Bot Tetap On :)");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


bot.on("message", async (message) => {
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }
  // fixed KONTOL
    if(message.author.bot) return;
  if(message === "dm") return
  let prefixserver = prefixes[message.guild.id].prefixes;
  if (message == `<@${bot.user.id}>`) {
    message.channel.send(`:sparkles: Hello, my global prefix is **!a.**\n:information_source: My prefix on this server is **${prefixserver}**`);
        console.log(`${message.author.username} using kntl message`)
    } 
  
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }
     if(message.author.bot) return;

    let prefix = prefixes[message.guild.id].prefixes;
  if(!message.content.startsWith(prefix)) return;
    let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  
  
  if(commandfile) commandfile.run(bot,message,args);

})

bot.login(tokenfile.token);
