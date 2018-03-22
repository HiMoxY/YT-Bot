const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", function() {
    var clientonmessage = `
------------------------------------------------------
> Logging in...
------------------------------------------------------
Logged in as ${client.user.tag}
Working on ${client.guilds.size} servers!
${client.channels.size} channels and ${client.users.size} users cached!
I am logged in and ready to roll!
LET'S GO!
------------------------------------------------------
----------Bot created by Tea Cup#3433-----------
------------------------------------------------------
-----------------Bot's commands logs------------------`

    console.log(clientonmessage);
    client.user.setGame(
        ` Test Bot For Hunters Youtube! `,
        "https://www.twitch.tv/xxwilsongamingxx"
      );
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('SUPER_SECRETE_BOTLOGIN!'); //Thats it for todays lession! 3/21/18
