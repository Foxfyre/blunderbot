const Discord = require('discord.js');

exports.run = (client, member) => {
  
  let memberId = member.id;
  let userId = member.user.username;
  
  if (member.guild.id === "449845411344154634") {
    console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
    //member.guild.channels.name("welcome").send(`"${member.user.username}" has joined this server`member.guild.channels.find("name","welcome"));
    member.user.send(`Hey <@!${memberId}>, welcome to Rat Catchers' Guild! Please take a minute to read the <#449845778073124875> - especially point #9. Then head over to <#449846256148152332>     and assign some roles to yourself. A list of bot commands are available by typing bb:help.`)
  }

}
