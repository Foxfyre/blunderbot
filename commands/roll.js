exports.run = (client, message, args) => {
  let diceQty;
  let roll;
  let rollType = "";
  let resultSuccess = "";
  let resultsAdd = 0;
  
  if (args[0].includes("!")) {
    rollType = "explode";
  } else if (args[0].includes("#")) {
    rollType = "comment";
  } else if (args[0].includes("+")) {
    rollType = "add";
  } else if (args[0].includes("@")) {
    rollType = "degrees";
  } else {
    rollType = "standard";
  }
  
  // split the dice input by the "d"
  console.log(args);
  args = args.join(" ");
  console.log(args);
  roll = args.split(/[d#!@+]+/);
  console.log(roll);

  
  // if the first character is al alphabetical character, set the diceQty to 1. it means someone rolled a "d#"    
  if (roll[0] == "") {
    roll[0] = 1;
  }
  diceQty = roll[0];

  // diceSide is how many sides are on the die(dice)
  let diceSide = roll[1];
  // rollType will define what type of roll it is. at first only roll option is a standard dice roll but there will be others to come, like exploding etc.

  console.log(rollType);
      
  // resultsArray this will be the list of results generated by the roll
  let resultsArray = [];
  let resultsSum = 0;
  // if there is no rolltype specified, it will be a standard roll
  if (rollType === "standard") {
    console.log("rolling for std roll");
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      //resultsArray.push(randNum);
    }
    // After for loop...
    let resultsPrint = resultsArray.join(" + ");
    if (diceQty > 1) {
      message.channel.send(`<@!${message.member.id}> rolled **${resultsSum}**. (${resultsPrint} = ${resultsSum})`);
    } else {
      message.channel.send(`<@!${message.member.id}> rolled **${resultsSum}**.`);
    }
    
    //message.delete();
  }
  
  if (rollType === "comment") {
    console.log("rolling for commented roll");
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      //resultsArray.push(randNum);
    }
    // After for loop...
    let resultsPrint = resultsArray.join(" + ");
    message.channel.send(`<@!${message.member.id}> rolled **${resultsSum}**. (${resultsPrint} = ${resultsSum}) **Reason**: ${roll[2]}`);    
  }
  
  if (rollType === "degrees") {
    console.log("rolling for degrees of success roll");
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      //resultsArray.push(randNum);
    }
    let rollDiff = roll[2] - resultsSum;
    if (rollDiff < 0) {
      resultSuccess = "failed"
    } else if (rollDiff >= 0) {
      resultSuccess = "succeeded";
    }
    let rollDegree = Math.floor(Math.abs(rollDiff/10));
    message.channel.send(`<@!${message.member.id}>, you rolled **${resultsSum}**, you wanted **${roll[2]}**. You have _**${resultSuccess}**_  by a difference of **${Math.abs(rollDiff)}** for a degree of **${rollDegree}**`);
  }
  
  if (rollType === "add") {
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      //resultsArray.push(randNum);
    }
    let resultsPrint = resultsArray.join(" + ");
    message.channel.send(`<@!${message.member.id}> rolled **${(parseInt(resultsSum) + parseInt(roll[2]))}**. (${resultsPrint} = ${resultsSum},  ${roll[2]})`);
  }
}

