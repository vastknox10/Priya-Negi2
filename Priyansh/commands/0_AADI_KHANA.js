const fs = require("fs");
module.exports.config = {
        name: "KISS-YOU",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "AADI BABU",
        description: "THIS BOT IS MR AADI SHARMA",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("kiss") ||
     react.includes("kiss you") || react.includes("umma") || react.includes("KISS DO") ||
react.includes("kiss me") ||
react.includes("KISS YOU")) {
                var msg = {
                                body: `=𝐎𝐰𝐧𝐞𝐫 ➻  𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 \n__________________________________\n\n𝐋𝐨 𝐁𝐚𝐁𝐲\n__________________________________`,attachment: fs.createReadStream(__dirname + `/noprefix/received_472683075271350.mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }