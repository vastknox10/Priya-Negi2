const fs = require("fs");
module.exports.config = {
        name: "RuhaNi",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "RuhaNi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("RUHANI")==0 || event.body.indexOf("ruhani")==0 || event.body.indexOf("Ruhani")==0 || event.body.indexOf("@Ruhani Khan")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐒𝐇𝐀𝐀𝐍 𝐊𝐇𝐀𝐍 𝐊 \n__________________________________\n\n𝐎𝐰𝐧𝐞𝐑 𝐑𝐮𝐇𝐚𝐍𝐢\n__________________________________ ",
                                attachment: fs.createReadStream(__dirname + `/noprefix/FB_IMG_1731385004342.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😳", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
