const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
    name: "igautodownload",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Priyansh Rajput",
    description: "Downloads Instagram video using an API",
    commandCategory: "utility",
    usages: "[Instagram video URL]",
    cooldowns: 5,
    dependencies: {
        "axios": "0.21.1",
        "fs-extra": "10.0.0",
        "tempy": "0.4.0"
    }
};

module.exports.handleEvent = async function({ api, event }) {
    if (event.type === "message" && event.body) {
        if (event.body.startsWith("https://www.instagram.com/share/") || event.body.startsWith("https://www.instagram.com/reel/")) {
            try {
                // Use the provided API to fetch the video download link
                const apiUrl = `https://priyansh-ai.onrender.com/reel?link=${encodeURIComponent(event.body)}`;
                const response = await axios.get(apiUrl);
                const downloadLink = response.data.downloadLink;

            if (!downloadLink) {
                return api.sendMessage("Failed to fetch the download link. Please check the video link or try again later.", event.threadID, event.messageID);
            }
                  // Download the video
                  const videoPath = path.resolve(__dirname, "tempVideo.mp4");
                  const videoStream = await axios({
                      url: downloadLink,
                      method: "GET",
                      responseType: "stream"
                  });
      
                  videoStream.data.pipe(fs.createWriteStream(videoPath));
      
                  videoStream.data.on("end", async () => {
                      // Send the video
                      api.sendMessage({
                          body: "𝐎𝐰𝐧𝐞𝐫 ➻    𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮ye rahi  downloaded apki Instagram video!",
                          attachment: fs.createReadStream(videoPath)
                      }, event.threadID, () => {
                          // Delete the video after sending
                          fs.unlinkSync(videoPath);
                      }, event.messageID);
                  });
      
                  videoStream.data.on("error", (err) => {
                      console.error("Error downloading the video:", err);
                      api.sendMessage("Failed to download the video. Please try again later.", event.threadID, event.messageID);
                  });
      
              } catch (err) {
                  console.error("Error:", err);
                  return api.sendMessage("An error occurred while processing your request. Please try again later.", event.threadID, event.messageID);
              }
        }
    }
};

module.exports.run = async function ({ api, event }) {
    return api.sendMessage(
        `This command does not support direct execution.`,
        event.threadID,
        event.messageID,
    );
};