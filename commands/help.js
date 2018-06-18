exports.run = (client, message, args) => {

    if (args[0] === "") {
        message.channel.send("Here is a list of the current help topics. To use help , please type bb:help <topic>: \
        roll3: The WFRP 3rd edition dice roller.\
        namegen: A name generator created from WFRP 2nd edition resources");
    }
    if (args[1] === "dice") {
        message.author.send("To use the 3rd edition roller, please follow the following format: bb:roll3 <dice to roll>. In third edition there are 7 dice to roll. Purple, Blue, Green, Red, Yellow, White, and Black. Most of these dice rolls will be known by their first letter in the colour name so P for Purple, G for Green, R for Red and so on. The exceptions to these are black and blue, to roll a blue die, use bl, to roll black, bk. Preceeding those dice colours, you will have to indicate how many of each dice colour you will want to roll, listed numerically (1,2,3 etc.) The end syntax will be: `bb:roll3 3p 4bl 2g 1bk` or a combination thereof. The order in which the dice are written in does not matter, and if you are not rolling any dice of a specific colour, they do not need to be listed either. If you have any further questions, contact Foxfyre for more info." );
    }
}