const fs = require("fs");
module.exports.config = {
        name: "by",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "Bye",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("BYE")==0 || event.body.indexOf("bye")==0 || event.body.indexOf("Bye")==0 || event.body.indexOf("ByE")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 \n__________________________________\n🙋  🄱🅈🄴 🄱🅈🄴 🄱🄰🄱🅄 🄼🄸🅂🅂 🅈🄾🅄 🄱🄷🅄🅃 🅂🄰🅁🄰  🙋\n__________________________________ ",
                                attachment: fs.createReadStream(__dirname + `/noprefix/51e2737de4bcc279c7d898c1799f8685.gif`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥂", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }