exports.run = (client, message, args) => {

  if (args[0] === undefined) {
        message.channel.send("Here is a list of the current help topics. To use help , please type bb:help <topic>: \n _**roll3**_ : The WFRP 3rd edition dice roller.\n _**namegen**_ : A name generator created from WFRP 2nd edition resources\n _**podcast**_ : A list of podcasts and videos all collected in one place\n _**links**_ : A list of useful links all collected in one place");
  }
  if (args[0] === "roll3") {
        message.author.send("To use the 3rd edition roller, please follow the following format: bb:roll3 <dice to roll>. In third edition there are 7 dice to roll. Purple, Blue, Green, Red, Yellow, White, and Black. Most of these dice rolls will be known by their first letter in the colour name so P for Purple, G for Green, R for Red and so on. The exceptions to these are black and blue, to roll a blue die, use bl, to roll black, bk. Preceeding those dice colours, you will have to indicate how many of each dice colour you will want to roll, listed numerically (1,2,3 etc.) The end syntax will be: `bb:roll3 3p 4bl 2g 1bk` or a combination thereof. The order in which the dice are written in does not matter, and if you are not rolling any dice of a specific colour, they do not need to be listed either. If you have any further questions, contact Foxfyre for more info." );
  }
  if (args[0] === "namegen") {
    message.author.send("The syntax for namegen is bb:namegen <race> <gender>\nRaces currently available: human, elf, dwarf, hobbit, gnome\nGender: female, male\nExample: ``bb:namegen elf female``");
  }
  if (args[0] === "podcast") {
     message.author.send("The podcast feature allows us to have a summarized list of the podcasts and videos that are created of the WFRP game systems. A one stop shop so you dont have to go searching through a long channel history to find what you're looking for. To use the feature, the syntax is ``bb:podcast create <title> <url>``, where <title> is the name of the podcast or video group, and <url> is the URL of where the media can be found. As always if there are any questions, contact Foxfyre for more info.");
     message.author.send("``bb:podcast list`` provides a list of current listed podcasts/videos");
  }
  if (args[0] === "links") {
    message.author.send("The link feature allows us to have a summarized list of the useful linkes that we have gathered delivered directly to you. Use syntax ``bb:links list`` to see the links. To have a specific list which displays a specific category use the sintax ``bb:links <keyword>``. The valid keywords are: Community, Virtual, Blog, Fan."); 
  }
}