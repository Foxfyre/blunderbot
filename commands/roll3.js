exports.run = (client, message, args) => {

        let diceCount;
        let diceType = [];
        let result;
        let results = [];
        let resultsArr =[];
        let resultSplit;
        let bane = 0;
        let blank = 0;
        let boon = 0;
        let challenge = 0;
        let delay = 0;
        let exertion = 0;
        let success = 0;
        let chaos = 0;
        let righteous = 0;
        let comet = 0;
        
        const p = ["challenge","challenge","challenge challenge","challenge challenge","bane","bane bane","chaos","blank"];
        const bl = ["success","success","success","success","boon","boon","blank","blank"];
        const g = ["success","success","success","success","boon","boon","success boon","delay success","delay success","blank"];
        const r = ["success success","success success","success boon","boon boon","exertion success","exertion success","bane","bane","blank","blank"];
        const y = ["success","righteous","boon","boon","comet","blank"];
        const w = ["success","success","boon","blank","blank","blank"];
        const bk = ["challenge","challenge","bane","blank","blank","blank"];
        
    // map through the rolls. This sets wwhat colour dice if only 1 letter, its not black or blue, if 2 letters, its black and blue
    args.map(function (roll) {
        diceCount = roll[0];
        if (roll[2] == null) {
            diceType = roll[1];
            diceType = eval(diceType);
        } else {
            diceType = roll[1] + roll[2];
            diceType = eval(diceType);
        }
    // I can delete the below line and replace all variables with the diceType.length. 
    let diceTypeLength = diceType.length;
    for (let i = 0; i < diceCount; i++) {
      let randomNumber = Math.floor(Math.random() * (diceTypeLength));
      result = diceType[randomNumber] + "";
      // Exploding Dice
      if (result === "righteous") {
        for (let i = 0; i < 1; i++) {
          message.channel.send("righteous!");
          randomNumber = Math.floor(Math.random() * (diceTypeLength));
          result = diceType[randomNumber] + "";
          if (result === "righteous") {
            i--;
          }
          message.channel.send(result + " " + "bonus roll");
          results.push("success");
        }
      }
      results.push(result);
    }
        return results;
    });

    results.map(function (roll) {
        var arrayOfStrings = roll.split(" ");
        for (var i = 0; i < arrayOfStrings.length; i++) {
            resultsArr.push(arrayOfStrings[i]);
        }

        return resultsArr;
    });

    resultsArr.sort();

    resultsArr.map(function (dice) {
        switch (dice) {
            case "bane":
                bane++;
                break;
            case "blank":
                blank++;
                break;
            case "boon":
                boon++;
                break;
            case "challenge":
                challenge++;
                break;
            case "chaos":
                chaos++;
                break;
            case "comet":
                comet++;
                break;
            case "delay":
                delay++;
                break;
            case "exertion":
                exertion++;
                break;
            case "righteous":
                righteous++;
                break;
            case "success":
                success++;
                break;
        }

        return resultsArr;
    });

    let shortList = "";
  
    let successCounter = success;
    let challengeCounter = challenge;
    if (success !== 0 && challenge !== 0) {
      for (var i = 0; i < successCounter && i < challengeCounter; i++ ) {
        success--;
        challenge--;
      }
    }
    
    let baneCounter = bane;
    let boonCounter = boon;
    if (bane !== 0 && boon !== 0) {
      for (var i = 0; i < baneCounter && i < boonCounter; i++ ) {
        bane--;
        boon--;
      }
    }

    const e3success = client.emojis.get("456262358122364930");
    const e3bane = client.emojis.get("456262357899935744");
    const e3boon = client.emojis.get("456262357908193290");
    const e3challenge = client.emojis.get("456262357795209217");
    const e3chaos = client.emojis.get("456262358042542089");
    const e3comet = client.emojis.get("456262358105587733");
    const e3delay = client.emojis.get("456262358214639635");
    const e3exertion = client.emojis.get("456262358097199104");
    const e3righteous = client.emojis.get("452597347344449536");

    let baneString = `${e3bane.toString()}: ${bane} `; // change later to `${e3bane}: ${bane} ` to use emojis
    let blankString = `⬜ ${blank} `;
    let boonString = `${e3boon.toString()}: ${boon} `;
    let challengeString = `${e3challenge.toString()}: ${challenge} `;
    let chaosString = `${e3chaos.toString()}: ${chaos} `;
    let cometString = `${e3comet.toString()}: ${comet} `;
    let delayString = `${e3delay.toString()}: ${delay} `;
    let exertionString = `${e3exertion.toString()}: ${exertion} `;
    let righteousString = `${e3righteous.toString()}: ${righteous} `;
    let successString = `${e3success.toString()}: ${success} `;


    
    if (bane !== 0) {
      shortList += baneString;
    }
    if (blank !== 0) {
      shortList += blankString;
    }
    if (boon !== 0) {
      shortList += boonString;
    }
    if (challenge !== 0) {
      shortList += challengeString;
    }  
    if (chaos !== 0) {
      shortList += chaosString;
    }
    if (comet !== 0) {
      shortList += cometString;
    }  
    if (delay !== 0) {
      shortList += delayString;
    }  
    if (exertion !== 0) {
      shortList += exertionString;
    }  
    if (righteous !== 0) {
      shortList += righteousString;
    }  
    if (success !== 0) {
      shortList += successString;
    }  



    message.channel.send(shortList);

    //message.channel.send("Results: " + e3bane.toString() + " " + bane + ", " + "blank " + blank + ", " + e3boon.toString() + " " + boon + ", " + e3challenge.toString() + " " + challenge + ", " + e3chaos.toString() + " " + chaos + ", " + e3comet.toString() + " " + comet + ", " + e3delay.toString() + " " + delay + ", " + e3exertion.toString() + " " + exertion + ", " + e3righteous.toString() + " " + righteous + ", " + e3success.toString() + " " + success);

}