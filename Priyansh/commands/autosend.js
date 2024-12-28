const schedule = require("node-schedule");
const moment = require("moment-timezone");
const chalk = require("chalk");
const fs = require("fs");
const request = require("request");

module.exports.config = {
  name: "autosent",
  version: "10.0.0",
  hasPermssion: 0,
  credits: "ARIF BABU",
  description: "MADE BY ARIF BABU",
  commandCategory: "group messenger",
  usages: "[]",
  cooldowns: 3,
};

const messages = [
    { time: '12:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 12:00 𝗔𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '1:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 1:00 A𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '2:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 2:00 A𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '3:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 3:00 A𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '4:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 4:00 A𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '5:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 5:00 𝗔𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '6:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 6:00 A𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '7:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 7:00 A𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '8:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 8:00 A𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '9:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 9:00 A𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '10:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 10:00 A𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '11:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 11:00 A𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '12:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 12:00 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '1:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 1:00 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '2:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 2:00 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '3:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 3:00 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '4:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 4:00 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '5:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 5:00 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '6:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 6:00 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '7:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 7:00 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '8:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 8:00 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '9:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 9:00 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '10:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 10:00 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' },
    { time: '11:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 11:00 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 ❃ ━━━━━ ❁' }
];

const imageLinks = [
"https://i.imgur.com/VIUg4zO.jpeg",
"https://i.imgur.com/8ORCZNh.jpeg",
"https://i.imgur.com/K8TFv2Y.jpeg",
"https://i.imgur.com/2e2V5FX.jpeg",
"https://i.imgur.com/IvRTRbN.jpeg",
"https://i.imgur.com/YJLYUes.jpeg",
];

module.exports.onLoad = ({ api }) => {
  console.log(
    chalk.bold.hex("#00c300")(
      "============ SUCCESFULLY LOADED THE AUTOSENT COMMAND ============"
    )
  );

  messages.forEach(({ time, message }) => {
    const [hour, minute, period] = time.split(/[: ]/);
    let hour24 = parseInt(hour, 10);
    if (period === "PM" && hour !== "12") {
      hour24 += 12;
    } else if (period === "AM" && hour === "12") {
      hour24 = 0;
    }

    const scheduledTime = moment
      .tz({ hour: hour24, minute: parseInt(minute, 10) }, "Asia/Kolkata")
      .toDate();

    schedule.scheduleJob(scheduledTime, () => {
      if (!global.data || !global.data.allThreadID) {
        console.error("Error: `global.data.allThreadID` is not defined.");
        return;
      }

      global.data.allThreadID.forEach((threadID) => {
        // Select a random image link
        const randomImage =
          imageLinks[Math.floor(Math.random() * imageLinks.length)];

        // File path to save the image temporarily
        const filePath = `${__dirname}/cache/temp_image.jpg`;

        // Download the image
        request(randomImage)
          .pipe(fs.createWriteStream(filePath))
          .on("close", () => {
            // Send the message with the downloaded image
            api.sendMessage(
              {
                body: message,
                attachment: fs.createReadStream(filePath),
              },
              threadID,
              (error) => {
                if (error) {
                  console.error(`Failed to send message to ${threadID}:`, error);
                }
              }
            );
          });
      });
    });
  });
};

module.exports.run = () => {
  // This function is intentionally left empty
};