const Discord = require('discord.js');
const fs = require("fs");
const podcasts = JSON.parse(fs.readFileSync("./commands/podcast.json","utf8"));

exports.run = (client, message, args) => { 
  if (args[0] == "create") {
    // takes the args from the event handler and assigns them to the variable inputArr
    let inputArr = args;
    // removes the first index of the array which is the command for this section
    inputArr.shift();
    // rejoins the array into a string separated by spaces
    let title = inputArr.join(" ");
    
    let http = "";
    let description = "";
    // This splits up the string based upon http or https and sets http(s) to be added back later
    if (title.includes("http://") == true)
    {
      title = title.split("http://");
      http = "http://";
    }
    else if (title.includes("https://") == true) {
      title = title.split("https://");
      http = "https://";
    }
    
    let podcastTitle = title.shift();
    let urlDesc = title.join(" ");
    urlDesc = urlDesc.split(" ");
    let url = urlDesc.shift();
    description = urlDesc.join(" ");
    
    podcastTitle = podcastTitle.trim();
    let creator = message.author.username;
    let podArray = [];  
    
    podcasts.map(podcast => { 
      podArray.push(podcast.title);
    })
    if (podArray.includes(podcastTitle) === true) {
      message.channel.send("That title already exists");
    } else if (podArray.includes(podcastTitle) !== true) {
      let podcast = {
      "title": podcastTitle,
      "url": url,
      "http": http,
      "description": description,
      "created": creator
      }
      podcasts.push(podcast);
      fs.writeFile("./commands/podcast.json", JSON.stringify(podcasts), (err) => console.error);
      message.channel.send(podcastTitle + " created.");
      }    
  }
  
  if (args[0] == "list") {
    message.channel.send("Podcasts");
    podcasts.map(podcast => {
        message.channel.send("**Name**: *" + podcast.title + "*  **URL**: *" + `<${podcast.http}${podcast.url}>` + "*  **Description**: *" + podcast.description + "*  **Added by**: *" + podcast.created + "*");
    })
  }
}