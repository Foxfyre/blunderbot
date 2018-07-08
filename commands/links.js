const Discord = require('discord.js');
const fs = require("fs");
const linkList = JSON.parse(fs.readFileSync("./commands/links.json","utf8"));

exports.run = (client, message, args) => {

  if (args[0] == "add") {
    // takes the args from the event handler and assigns them to the variable inputArr
    let inputArr = args;
    // removes the first index of the array which is the command for this section
    inputArr.shift();
    // rejoins the array into a string separated by spaces
    let inputStr = inputArr.join(" ");
    
    let http = "";
    let description = "";
    
    // This splits up the string based upon http or https and sets http(s) to be added back later
    if (inputStr.includes("http://") == true)
    {
      inputArr = inputStr.split("http://");
      http = "http://";
    }
    else if (inputStr.includes("https://") == true) {
      inputArr = inputStr.split("https://");
      http = "https://";
    }
    let category = inputArr.shift();
    
    let urlDesc = inputArr.join(" ");
    urlDesc = urlDesc.split(" ");
    let url = urlDesc.shift();
    description = urlDesc.join(" ");
    
    category = category.trim();
    let creator = message.author.username;
    let linkArray = [];  
    
    linkList.map(link => { 
      linkArray.push(link.url);
    })
    
    if (linkArray.includes(url) === true) {
      message.channel.send("That entry already exists");
    } else if (linkArray.includes(url) !== true) {
      let entry = {
      "category": category,
      "url": url,
      "http": http,
      "description": description,
      "created": creator
      }
      linkList.push(entry);
      //insertionSort(linkList);
      fs.writeFile("./commands/links.json", JSON.stringify(linkList), (err) => console.error);
      message.channel.send(url + " created.");
      }    
  }
  
  if (args[0] == "list") {
    message.author.send("Useful Links");
    linkList.map(links => {
        message.author.send("**Category**: *" + links.category + "*  **URL**: *" + `<${links.http}${links.url}>` + "*  **Description**: *" + links.description + "*");
    })
  } else if (args.includes("Community") || args.includes("community")) {
    message.author.send("Community Sites");
    linkList.map(links => {
      if (links.category.includes("Comm") === true) {
        message.author.send("**Category**: *" + links.category + "*  **URL**: *" + `<${links.http}${links.url}>` + "*  **Description**: *" + links.description + "*");
      }
    })
  } else if (args.includes("Blog") || args.includes("blog")) {
    message.author.send("Blogs");
    linkList.map(links => {
      if (links.category.includes("Blog") === true) {
        message.author.send("**Category**: *" + links.category + "*  **URL**: *" + `<${links.http}${links.url}>` + "*  **Description**: *" + links.description + "*");
      }
    })
  } else if (args.includes("Virtual") || args.includes("virtual")) {
    message.author.send("Virtual Gaming");
    linkList.map(links => {
      if (links.category.includes("Virtual") === true) {
        message.author.send("**Category**: *" + links.category + "*  **URL**: *" + `<${links.http}${links.url}>` + "*  **Description**: *" + links.description + "*");
      }
    })
  } else if (args.includes("Fan") || args.includes("fan")) {
    message.author.send("Fan Content");
    linkList.map(links => {
      if (links.category.includes("Fan") === true) {
        message.author.send("**Category**: *" + links.category + "*  **URL**: *" + `<${links.http}${links.url}>` + "*  **Description**: *" + links.description + "*");
      }
    })
  } else if (args.includes("Tools") || args.includes("tools")) {
    message.author.send("Tools");
    linkList.map(links => {
      if (links.category.includes("Tools") === true) {
        message.author.send("**Category**: *" + links.category + "*  **URL**: *" + `<${links.http}${links.url}>` + "*  **Description**: *" + links.description + "*");
      }
    })
  }
}

/*function insertionSort (items) {
  for (var i = 0; i < items.length; i++) {
    let value = items[i].category
    // store the current item value so it can be placed right
    for (var j = i - 1; j > -1 && items[j].category > value; j--) {
      // loop through the items in the sorted array (the items from the current to the beginning)
      // copy each item to the next one
      items[j + 1].category = items[j].category
    }
    // the last item we've reached should now hold the value of the currently sorted item
    items[j + 1].category = value
  }

  return linkList
}*/

