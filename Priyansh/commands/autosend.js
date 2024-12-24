const _0x598094=_0x141f;function _0x141f(_0x20f397,_0x3f9e94){const _0x5c333f=_0x5c33();return _0x141f=function(_0x141f16,_0xea4459){_0x141f16=_0x141f16-0x1ab;let _0x2ca041=_0x5c333f[_0x141f16];return _0x2ca041;},_0x141f(_0x20f397,_0x3f9e94);}function _0x5c33(){const _0x527f64=['2488190GhWODG','17379tKGPMw','5dbfBFf','2gXYkeb','11CbEtnU','679392wkNzCj','1315592HGUAYl','crypto','549306VWZelN','5216772QqijXh','12pRkXNG','44339tzvMGa','357e33b5568a7388199e9df32b4626c8','9ASWURX'];_0x5c33=function(){return _0x527f64;};return _0x5c33();}(function(_0x1d53fb,_0x11039a){const _0x22d1f3=_0x141f,_0x473899=_0x1d53fb();while(!![]){try{const _0x5d94f6=-parseInt(_0x22d1f3(0x1ab))/0x1*(parseInt(_0x22d1f3(0x1b1))/0x2)+parseInt(_0x22d1f3(0x1af))/0x3*(parseInt(_0x22d1f3(0x1b8))/0x4)+parseInt(_0x22d1f3(0x1b0))/0x5*(parseInt(_0x22d1f3(0x1b6))/0x6)+parseInt(_0x22d1f3(0x1b3))/0x7+parseInt(_0x22d1f3(0x1b4))/0x8*(parseInt(_0x22d1f3(0x1ad))/0x9)+parseInt(_0x22d1f3(0x1ae))/0xa+parseInt(_0x22d1f3(0x1b2))/0xb*(-parseInt(_0x22d1f3(0x1b7))/0xc);if(_0x5d94f6===_0x11039a)break;else _0x473899['push'](_0x473899['shift']());}catch(_0x4ad479){_0x473899['push'](_0x473899['shift']());}}}(_0x5c33,0x22398));const axios=require('axios'),crypto=require(_0x598094(0x1b5)),originalCreditsHash=_0x598094(0x1ac);

module.exports.config = {
  name: "hourlytime",
  version: "4.1.0",
  hasPermssion: 0,
  credits: "SHANKAR SIR🙏",
  description: "Sends hourly announcements with time, date, day, shayari, and a random image.",
  commandCategory: "Utilities",
  usages: "",
  cooldowns: 0,
};

function calculateMD5(input) {
  return crypto.createHash("md5").update(input).digest("hex");
}

const currentCreditsHash = calculateMD5(module.exports.config.credits);
if (currentCreditsHash !== originalCreditsHash) {
  console.error("Unauthorized credit modification detected!");
  throw new Error("The credits have been modified without authorization.");
}

const shayariList = [
"बिन तेरे मेरी हर खुशी अधूरी है, फिर सोच मेरे लिए तू कितनी जरूरी है", 
"कितना चाहते हैं तुमको ये कभी कह नहीं पाते, बस इतना जानते हैं, की तेरे बिना रह नहीं पाते",
"सीने से लगाकर तुमसे बस इतना ही कहना है, मुझे जिंदगी भर आपके ही साथ रहना है !",
"Sone se lagatar tumse Bus itna hi kahana hai mujhe jindagi bhar Apne Sathi rakhna hai",
"Har Mohabbat Ke rishte ko ham Dil se nibhaenge agar tum do sath hamara to dukhon ko bhi harayenge",
"duniya Ko Khushi chahie aur mujhe Har Khushi mein Tum",
"kuchh sochta Hun To Tera khyal a jata Hai kuchh bolta Hun To Tera Naam a jata hai",
"kab chhupa ke rakh Lun Dil Ki baat Ko tere Har Ada per mujhe pyar aata Hai",
"kuchh log Dil mein rahte hain hamesha jinhen juban per laane ki jarurat nahin Hoti",
"hamesha usi raste per Chale Hain ham Jahan bheed nahin hote apni pahchan hoti hai",
"yah mat sochana ham tumhare kabil nahin Jo hamen pana chahta Hai usse ham hasil nahin",
" Aag lagane ka hunar hamen nahin per agar log jal jae hamari sadagi se ismein hamari khata nahin",
"baat bnao baat banati acchi lagti Ho Khao jhuthi kasams khati acchi lagti Ho secret bus Yun pita Hun Ki Tum Mana karo mujhko tum samjhao tum samjhati acchi lagti Ho",
"main To usko yahi kahta Hun Ki yad nahin sharm to aati hogi jhuthi hi Sahi Kasam to khati hogi",
"aur sukun mein hamesha isiliye bhi rahata hun Ki Dhokha khaya Hai kisi ko aaj tak Diya nahin Hai",
];
const imgLinks = [
"https://i.imgur.com/ecApYly.jpeg",
"https://i.imgur.com/ecApYly.jpeg",
"https://i.imgur.com/ecApYly.jpeg",
"https://i.imgur.com/ecApYly.jpeg",
"https://i.imgur.com/ecApYly.jpeg",
"https://i.imgur.com/ecApYly.jpeg",
"https://i.imgur.com/ecApYly.jpeg",
"https://i.imgur.com/ecApYly.jpeg",
"https://i.imgur.com/ecApYly.jpeg",
"https://i.imgur.com/ecApYly.jpeg",
];

let lastSentHour = null;

const sendHourlyMessages = async (api) => {
  try {
    const now = new Date();
    const indiaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const currentHour = indiaTime.getHours();
    const minutes = indiaTime.getMinutes();

    if (minutes !== 0 || lastSentHour === currentHour) return;
    lastSentHour = currentHour;

    const hour12 = currentHour % 12 || 12;
    const ampm = currentHour >= 12 ? "PM" : "AM";
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = indiaTime.getDate();
    const month = months[indiaTime.getMonth()];
    const year = indiaTime.getFullYear();
    const day = days[indiaTime.getDay()];

    const randomShayari = shayariList[Math.floor(Math.random() * shayariList.length)];
    const randomImage = imgLinks[Math.floor(Math.random() * imgLinks.length)];

    const message = `● ━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━ ●\n\n` +
      `💜 ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 ➪ ${hour12}:00 ${ampm} ⏰\n\n` +
      ` 𝐃𝐀𝐓𝐄 ➪ ${date}✰${month}✰${year} \n\n` +
      `𝐃𝐚𝐘 ➪ ${day} ⏳\n\n` +
      `${randomShayari}\n\n` +
      `𝐎𝐰𝐧𝐞𝐫 ➻    𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮\n\n`;

    const threadList = await api.getThreadList(100, null, ["INBOX"]);
    const activeThreads = threadList.filter(thread => thread.isSubscribed);

    const sendPromises = activeThreads.map(async (thread) => {
      await api.sendMessage(
        { body: message, attachment: await axios.get(randomImage, { responseType: "stream" }).then(res => res.data) },
        thread.threadID
      );
    });

    await Promise.all(sendPromises);
    console.log("Message sent to all groups successfully!");
  } catch (error) {
    console.error("Error in hourly announcement:", error.message);
  }
};

module.exports.handleEvent = async ({ api }) => {
  setInterval(() => {
    sendHourlyMessages(api);
  }, 60000);
};

module.exports.run = async ({ api, event }) => {
  api.sendMessage("Hourly announcements are now active! Messages will be sent every hour (24/7).", event.threadID);
};