const axios = require('axios');
const util = require('util');

module.exports = {
    config: {
        name: "eval",
        version: "1.2.0",
        hasPermssion: 0, 
        credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
        description: "Safely evaluate JavaScript code or test APIs",
        commandCategory: "System",
        usages: "/eval <code or API URL>",
        cooldowns: 0,
        dependencies: {
            "axios": "",
            "util": ""
        }
    },
    run: async function({ api, event, args }) {
        const senderID = event.senderID;
        const allowedUsers = ["100037743553265"]; // Allowed users only

        if (!allowedUsers.includes(senderID)) {
            return api.sendMessage("You do not have permission to use this command.", event.threadID, event.messageID);
        }

        if (args.length === 0) {
            return api.sendMessage("Please provide code or API to evaluate.", event.threadID, event.messageID);
        }

        const inputCode = args.join(" ");
        let result;

        try {
            // If input is an API URL
            if (inputCode.startsWith("http")) {
                const res = await axios.get(inputCode);
                result = res.data.imageUrl || util.inspect(res.data, { depth: 2 });
            } else {
                // Safely evaluate JavaScript code
                const safeEval = (code) => {
                    return (Function(`"use strict"; return (${code})`))(); // Safer eval using Function
                };
                result = await safeEval(inputCode);

                if (typeof result !== "string") {
                    result = util.inspect(result, { depth: 2 });
                }
            }
        } catch (error) {
            result = `Error: ${error.message}`;
        }

        // Truncate long output
        if (result.length > 2000) {
            result = result.substring(0, 2000) + "\n...output truncated";
        }

        return api.sendMessage(result, event.threadID, event.messageID);
    }
};