const Discord = require("discord.js");
const bot = new Discord.Client();

var token = "MjMxNjE3MTQxNDEyMDY5Mzc2.CtGmXg.MTUeS1bTNaJhQcN4g5u8ZiVBoac";

console.log("Chrome is attempting to start...");

bot.on("ready", () => {
  console.log("Authenticated.");
});

var responses = [
  ["Ping!","Pong!"],
  ["help",'Some commands you can do are: "help", "Ping!", "links", "partyup [me/list]"'],
  ["test","test again"],
  ["links","Reddit page: https://www.reddit.com/r/RocketLeague/comments/55epqd/introducing_team_chroma/, Discord Invite: https://discord.gg/qVcYTzF"],
  ["SPOOPY","SPARRY SPELETONS SPEND SPIVERS SPOWN SPOUR SPINE"]
];

var partyers = [];

bot.on("message", message => {
  args = (message.content).split(" ");
  for (i=0;i<responses.length;i++) {
    if(args[0] === responses[i][0]) {
      if(typeof responses[i][1] === "string") {
        message.channel.sendMessage(responses[i][1]);
      }
    }
  }
  if(args[0] === "partyup") {
    if(args[1] === "me") {
      ok = true;
      for(i=0;i<partyers.length;i++) {
        if(partyers[i] === message.author.username) {
          ok = false;
        }
      }
      if(ok) {
        partyers.push(message.author.username);
        message.channel.sendMessage(message.author.username+" has been added to the party list!");
      } else {
        message.channel.sendMessage(message.author.username+", you're already in the party list lol");
      }
    } else if (args[1] === "list") {
      list = "Some people looking for a party are: ";
      for (i=0;i<partyers.length;i++) {
        list = list + partyers[i] + ", ";
      }
      message.channel.sendMessage(list);
    }
  }
})

bot.login(token);
