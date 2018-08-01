exports.run = (client, message, args) => {
  let ws = 0;
  let bs = 0;
  let s = 0;
  let t = 0;
  let ini = 0;
  let ag = 0;
  let dex = 0;
  let int = 0;
  let wp = 0;
  let fel = 0;
  let resultsArray = [];
  let resultsSum = 0;
  
  const diceSide = 10
  let shifted;
  let strArray = [];
  let dexArray = [];
  let conArray = [];
  let intArray = [];
  let wisArray = [];
  let chaArray = [];
  const reducer = (( accumulator, currentValue ) => accumulator + currentValue);
  

    if (args[0] === "human") { 
    const diceQty = 2;
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      ws = resultsSum + 20;
    }
    resultsSum = 0;
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      bs = resultsSum + 20;
    }
    resultsSum = 0;
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      s = resultsSum + 20;
    }
    resultsSum = 0;
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      t = resultsSum + 20;
    }
    resultsSum = 0;
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      ini = resultsSum + 20;
    }
    resultsSum = 0;
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      ag = resultsSum + 20;
    }
    resultsSum = 0;
      
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      dex = resultsSum + 20;
    }
    resultsSum = 0;
      
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      int = resultsSum + 20;
    }
    resultsSum = 0;
      
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      wp = resultsSum + 20;
    }
    resultsSum = 0;
      
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      fel = resultsSum + 20;
    }
    resultsSum = 0;
      
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Stats roll",
    description: "Stats for a Human character",
    fields: [{
        name: "Weapon Skill",
        value: ws
      },
      {
        name: "Balistic Skill",
        value: bs
      },
      {
        name: "Strength",
        value: s
      },
      {
        name: "Toughness",
        value: t
      },
      {
        name: "Initiative",
        value: ini
      },
      {
        name: "Agility",
        value: ag
      },
      {
        name: "Dexterity",
        value: dex
      },
      {
        name: "Intelligence",
        value: int
      },
      {
        name: "Willpower",
        value: wp
      }, 
      {
        name: "Fellowship",
        value: fel
      },               
    ],
    timestamp: new Date(),
  }
});
  } else if (args[0] === "dwarf") { 
    const diceQty = 2;
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      ws = resultsSum + 30;
    }
    resultsSum = 0;
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      bs = resultsSum + 20;
    }
    resultsSum = 0;
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      s = resultsSum + 20;
    }
    resultsSum = 0;
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      t = resultsSum + 30;
    }
    resultsSum = 0;
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      ini = resultsSum + 20;
    }
    resultsSum = 0;
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      ag = resultsSum + 10;
    }
    resultsSum = 0;
      
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      dex = resultsSum + 20;
    }
    resultsSum = 0;
      
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      int = resultsSum + 20;
    }
    resultsSum = 0;
      
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      wp = resultsSum + 40;
    }
    resultsSum = 0;
      
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      fel = resultsSum + 10;
    }
    resultsSum = 0;
      
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Stats roll",
    description: "Stats for a Dwarf character",
    fields: [{
        name: "Weapon Skill",
        value: ws
      },
      {
        name: "Balistic Skill",
        value: bs
      },
      {
        name: "Strength",
        value: s
      },
      {
        name: "Toughness",
        value: t
      },
      {
        name: "Initiative",
        value: ini
      },
      {
        name: "Agility",
        value: ag
      },
      {
        name: "Dexterity",
        value: dex
      },
      {
        name: "Intelligence",
        value: int
      },
      {
        name: "Willpower",
        value: wp
      }, 
      {
        name: "Fellowship",
        value: fel
      },               
    ],
    timestamp: new Date(),
  }
});
  } else if (args[0] === "halfling") { 
    const diceQty = 2;
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      ws = resultsSum + 10;
    }
    resultsSum = 0;
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      bs = resultsSum + 20;
    }
    resultsSum = 0;
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      s = resultsSum + 10;
    }
    resultsSum = 0;
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      t = resultsSum + 20;
    }
    resultsSum = 0;
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      ini = resultsSum + 20;
    }
    resultsSum = 0;
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      ag = resultsSum + 20;
    }
    resultsSum = 0;
      
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      dex = resultsSum + 30;
    }
    resultsSum = 0;
      
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      int = resultsSum + 20;
    }
    resultsSum = 0;
      
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      wp = resultsSum + 30;
    }
    resultsSum = 0;
      
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      fel = resultsSum + 30;
    }
    resultsSum = 0;
      
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Stats roll",
    description: "Stats for a Halfling character",
    fields: [{
        name: "Weapon Skill",
        value: ws
      },
      {
        name: "Balistic Skill",
        value: bs
      },
      {
        name: "Strength",
        value: s
      },
      {
        name: "Toughness",
        value: t
      },
      {
        name: "Initiative",
        value: ini
      },
      {
        name: "Agility",
        value: ag
      },
      {
        name: "Dexterity",
        value: dex
      },
      {
        name: "Intelligence",
        value: int
      },
      {
        name: "Willpower",
        value: wp
      }, 
      {
        name: "Fellowship",
        value: fel
      },               
    ],
    timestamp: new Date(),
  }
});
  } else if (args[0] === "elf") { 
    const diceQty = 2;
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      ws = resultsSum + 30;
    }
    resultsSum = 0;
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      bs = resultsSum + 30;
    }
    resultsSum = 0;
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      s = resultsSum + 20;
    }
    resultsSum = 0;
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      t = resultsSum + 20;
    }
    resultsSum = 0;
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      ini = resultsSum + 40;
    }
    resultsSum = 0;
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      ag = resultsSum + 30;
    }
    resultsSum = 0;
      
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      dex = resultsSum + 30;
    }
    resultsSum = 0;
      
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      int = resultsSum + 30;
    }
    resultsSum = 0;
      
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      wp = resultsSum + 30;
    }
    resultsSum = 0;
      
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      fel = resultsSum + 20;
    }
    resultsSum = 0;
      
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Stats roll",
    description: "Stats for an Elf character",
    fields: [{
        name: "Weapon Skill",
        value: ws
      },
      {
        name: "Balistic Skill",
        value: bs
      },
      {
        name: "Strength",
        value: s
      },
      {
        name: "Toughness",
        value: t
      },
      {
        name: "Initiative",
        value: ini
      },
      {
        name: "Agility",
        value: ag
      },
      {
        name: "Dexterity",
        value: dex
      },
      {
        name: "Intelligence",
        value: int
      },
      {
        name: "Willpower",
        value: wp
      }, 
      {
        name: "Fellowship",
        value: fel
      },               
    ],
    timestamp: new Date(),
  }
});
  } else {
    message.channel.send("that selection is not available.")
  }/*else if (args[0] === "3d") {
  
    const diceQty = 3;
    
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      str += randNum;
    }
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      dex += randNum;
    }
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      con += randNum;
    }
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      int += randNum;
    }
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      wis += randNum;
    }
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      cha += randNum;
    }
  } else {
    message.channel.send("Please use one of the following methods, '!stats 3d' or '!stats 4d'");
    return;
  }*/
  //message.channel.send(`Strength = ${str}\nDexterity = ${dex}\nConstitution = ${con}\nIntelligence = ${int}\nWisdom = ${wis}\nCharisma = ${cha}`);
    /*message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Stats roll",
    description: "Stats for a Human character",
    fields: [{
        name: "Weapon Skill",
        value: ws
      },
      {
        name: "Balistic Skill",
        value: bs
      },
      {
        name: "Strength",
        value: s
      },
      {
        name: "Toughness",
        value: t
      },
      {
        name: "Initiative",
        value: ini
      },
      {
        name: "Agility",
        value: ag
      },
      {
        name: "Dexterity",
        value: dex
      },
      {
        name: "Intelligence",
        value: int
      },
      {
        name: "Willpower",
        value: wp
      }, 
      {
        name: "Fellowship",
        value: fel
      },               
    ],
    timestamp: new Date(),
  }
});*/

}
