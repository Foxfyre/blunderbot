exports.run = (client, message, args) => {
  
  const diceQty = 1;
  const diceSide = 100;
  let roll;
  let results = "";
  let resultsAdd = 0;
  let sl;

  let target = parseInt(args[0]);
  //message.channel.send(`target ${target}`);
  
  let modifier = parseInt(args[1]);
  //message.channel.send(`modifier ${modifier}`);
  
  roll = Math.floor(Math.random() * (diceSide)) + 1;
  //message.channel.send(`roll ${roll}`);
  
  let modifiedTarget = target + modifier;
  //message.channel.send(`modifiedTarget ${modifiedTarget}`);
  
  let modRoll = Math.floor((roll/10));
  //message.channel.send(`modRoll ${modRoll}`);
  let modTarget = Math.floor((modifiedTarget/10));
  //message.channel.send(`modTarget ${modTarget}`);  
  
  if (roll < modifiedTarget) {
    sl = modTarget - modRoll;
    results = "succeeded"
  } else if (roll > modifiedTarget) {
    sl = modTarget - modRoll;
    results = "failed"
  }
  //message.channel.send(`sl ${sl}`);
  
  message.channel.send(`<@!${message.member.id}>, you rolled **${roll}** against ${modifiedTarget} (${target} + ${modifier}). You have ${results} with an SL of ${sl}`);
  }

