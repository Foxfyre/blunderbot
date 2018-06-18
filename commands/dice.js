client.on("message", (message) => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const action = args.shift().toLowerCase();

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    if (action === "random") {
        let base = Math.random();
        message.channel.send(`Your number is: ${base}!`);
    }

});