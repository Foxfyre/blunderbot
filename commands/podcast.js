const Discord = require('discord.js');

exports.run = (client, message, args, config, fs) => {
  message.channel.send("podcast triggered");
  let command = args;
  message.channel.send("args are " + command);
  
  if (command == "create") {
    
    const currentUserId = message.author.id;
    
    const currentUserName = message.author.username;
    
    message.channel.send(currentUserName + ", what is the name of the podcast entry you would like to create?")
    
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000, maxMatches: 1 });
    //console.log(collector)
    collector.on('collect', message => {
      let title = message
        message.channel.send("Title: " + title + " will be created. Is this correct? (yes/no)");
    })
    
    collector.on('collect', message => {
        if (message == "yes") {
          message.channel.send("Thank you. Now please enter the URL of the podcast"); 
        }
        else if (message == "no") {
          message.channel.send("Please start over");
        }
                 
    })
      
      
      
        //if (message.content == "yes") {
        //    message.channel.send("You Want To See Someones Spec OK!");
        //} else if (message.content == "no") {
        //    message.channel.send("You Want To Change Your Spec OK!");
        //}
    
  }
}