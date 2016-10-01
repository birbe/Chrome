const Discord = require("discord.js");
const bot = new Discord.Client();

var token = "Token";

console.log("Chrome is attempting to start...");

bot.on("ready", () => {
  console.log("Authenticated.");
});

var responses = [
  ["Ping!","Pong!"],
  ["c:help",'Some commands you can do: "c:help", "Ping!", "c:links"'],
  ["c:links","Reddit page: https://www.reddit.com/r/RocketLeague/comments/55epqd/introducing_team_chroma/, Discord Invite: https://discord.gg/qVcYTzF"]
];

bot.on("message", message => {
  for (i=0;i<responses.length;i++) {
    if(responses[i][0] === message.content) {
      message.channel.sendMessage(responses[i][1]);
    }
  }
})

bot.login(token);
