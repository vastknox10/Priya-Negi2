const fs = require("fs");
module.exports.config = {
  name: "maryam",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("maryam") ||
     react.includes("MARYAM") || react.includes("Maryam") || react.includes("maRyam") ||
react.includes("MarYam") ||
react.includes("MARyaM") ||     
react.includes("@Maryam Rajput")) {
    var msg = {
        body: `𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐁𝐨𝐭 𝐢𝐃 🤖\n\n● ────────────────── ●\n\n𝐌𝐘 𝐎𝐰𝐧𝐞𝐑 𝐀𝐚𝐝𝐢 𝐁𝐚𝐁𝐮 .... < 𝐄𝐃𝐈𝐓 > .... 𝐘𝐞 𝐁𝐨𝐓 𝐒𝐢𝐫𝐅 𝐎𝐰𝐧𝐞𝐑 𝐊 𝐋𝐢𝐘𝐞 𝐇 .... 𝐌𝐮𝐣𝐇𝐞 𝐀𝐚𝐏 𝐋𝐨𝐆𝐨 𝐊𝐨 𝐇𝐚𝐬𝐚𝐍𝐞 𝐊 𝐋𝐢𝐘𝐞 𝐁𝐚𝐧𝐘𝐚 𝐆𝐲𝐚 𝐇 𝐓𝐨𝐇 𝐇𝐚𝐩𝐩𝐘 𝐑𝐞𝐇𝐚𝐍𝐀 𝐀𝐩𝐩𝐤𝐚 𝐀𝐩𝐩𝐧𝐚 𝐎𝐰𝐧𝐞𝐑 𝐀𝐚𝐝𝐢 𝐁𝐚𝐁𝐮\n\n● ────────────────── ●\n\n𝐊𝐢𝐬𝐢 𝐁𝐡𝐢 𝐓𝐚𝐇𝐚𝐫𝐚 𝐊𝐢 𝐇𝐞𝐥𝐩 𝐋𝐚𝐧𝐢 𝐇𝐨 𝐌𝐞𝐒𝐒𝐠 𝐊𝐚𝐑𝐞 𝐎𝐰𝐧𝐞𝐫 ➻  𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮\n\nhttps://www.facebook.com/aadi.babu123?mibextid=ZbWKwL\n\n● ────────────────── ●\n\n𝐎𝐰𝐧𝐞𝐫 ➻  𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮`,attachment: fs.createReadStream(__dirname + `/noprefix/`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }