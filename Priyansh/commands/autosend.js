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
"⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐊𝐈𝐓𝐍𝐀 𝐃𝐀𝐑𝐃 𝐇𝐀𝐈 𝐃𝐈𝐋 𝐌𝐀𝐈 𝐃𝐈𝐊𝐇𝐀𝐘𝐀 𝐍𝐀𝐇𝐈 𝐉𝐀𝐓𝐀 𝐆𝐀𝐌𝐁𝐇𝐈𝐑 𝐇𝐀𝐈 𝐊𝐈𝐒𝐒𝐀 𝐒𝐔𝐍𝐀𝐘𝐀 𝐍𝐀𝐇𝐈 𝐉𝐀𝐓𝐀 𝐄𝐊 𝐁𝐀𝐑 𝐉𝐈 𝐁𝐇𝐀𝐑 𝐊𝐄 𝐃𝐀𝐊𝐇 𝐋𝐎 𝐈𝐒 𝐂𝐇𝐄𝐇𝐀𝐑𝐄 𝐊𝐎 𝐊𝐘𝐔𝐊𝐈 𝐁𝐀𝐑 𝐁𝐀𝐑 𝐊𝐀𝐅𝐀𝐍 𝐔𝐓𝐇𝐀𝐘𝐀 𝐍𝐀𝐇𝐈 𝐉𝐀𝐓𝐀 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭", 
"⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐃𝐀𝐑𝐃 𝐊𝐈 𝐁𝐀𝐀𝐒𝐓𝐀𝐀𝐍 𝐀𝐁𝐇𝐈  𝐁𝐀𝐀𝐊𝐈 𝐇𝐀𝐈 𝐌𝐎𝐇𝐀𝐁𝐀𝐓 𝐊𝐀 𝐈𝐌𝐓𝐄𝐇𝐀𝐀𝐍 𝐀𝐁𝐇𝐈 𝐁𝐀𝐊𝐊𝐈 𝐇𝐀𝐈 𝐃𝐈𝐋 𝐊𝐀𝐑𝐄 𝐓𝐎 𝐏𝐇𝐈𝐑 𝐌𝐈𝐋𝐍𝐄 𝐀𝐀 𝐉𝐀𝐍𝐀 𝐌𝐄𝐑𝐄 𝐃𝐈𝐋 𝐇𝐈 𝐓𝐎𝐎𝐓𝐀 𝐇𝐀𝐈 𝐉𝐀𝐀𝐍 𝐀𝐁𝐇𝐈 𝐁𝐀𝐀𝐊𝐈 𝐇𝐀𝐈 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭",
"⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐔𝐓𝐇𝐈 𝐔𝐒𝐊𝐈 𝐃𝐎𝐋𝐈 𝐓𝐎 𝐓𝐔𝐅𝐀𝐍 𝐋𝐀 𝐃𝐔𝐍𝐆𝐀 𝐌𝐋𝐈 𝐍𝐀 𝐌𝐔𝐉𝐄 𝐖𝐎 𝐓𝐎 𝐃𝐔𝐍𝐈𝐘𝐀 𝐉𝐀𝐋𝐀 𝐃𝐔𝐍𝐆𝐀 𝐃𝐇𝐎𝐊𝐀 𝐉𝐎 𝐃𝐈𝐘𝐀 𝐔𝐒𝐍𝐄 𝐓𝐎 𝐊𝐘𝐀 𝐇𝐔𝐀 𝐒𝐌𝐀𝐑𝐓 𝐃𝐈𝐊𝐓𝐀 𝐇𝐔 𝐘𝐀𝐑𝐑 𝐃𝐔𝐒𝐑𝐈 𝐏𝐓𝐀 𝐋𝐔𝐆𝐀 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭",
"⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐔𝐍𝐊𝐈 𝐌𝐎𝐇𝐀𝐁𝐁𝐀𝐓 𝐊𝐀 𝐒𝐈𝐋𝐒𝐈𝐋𝐀 𝐁𝐇𝐈 𝐊𝐘𝐀 𝐀𝐉𝐄𝐄𝐁 𝐒𝐈𝐋𝐒𝐈𝐋𝐀 𝐓𝐇𝐀 𝐀𝐏𝐍𝐀 𝐁𝐇𝐈 𝐍𝐀𝐇𝐈 𝐁𝐀𝐍𝐀𝐘𝐀 𝐀𝐔𝐑 𝐊𝐈𝐒𝐈 𝐊𝐀 𝐇𝐎𝐍𝐄 𝐁𝐇𝐈 𝐍𝐀𝐇𝐈 𝐃𝐈𝐘𝐀 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭",
"⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐁𝐀𝐂𝐇𝐏𝐀𝐍 𝐊𝐄𝐘 𝐃𝐈𝐍 𝐁𝐇𝐈 𝐊𝐈𝐓𝐍𝐄 𝐀𝐂𝐇𝐇𝐄 𝐇𝐎𝐓𝐄𝐘 𝐓𝐇𝐄𝐘 𝐓𝐀𝐁 𝐃𝐈𝐋 𝐍𝐀𝐇𝐈 𝐁𝐀𝐒 𝐊𝐇𝐈𝐋𝐎𝐍𝐄𝐘 𝐓𝐔𝐓𝐀 𝐊𝐀𝐑𝐓𝐄 𝐓𝐇𝐄𝐘 𝐀𝐁 𝐄𝐊 𝐀𝐀𝐍𝐒𝐎𝐎 𝐆𝐈𝐑𝐘 𝐓𝐎 𝐒𝐀𝐇𝐀 𝐍𝐀𝐇𝐈 𝐉𝐀𝐀𝐓𝐀 𝐁𝐀𝐂𝐇𝐏𝐀𝐍 𝐌𝐀𝐈 𝐓𝐎 𝐃𝐈𝐋 𝐁𝐇𝐔𝐑 𝐊𝐄𝐘 𝐑𝐎𝐘𝐀𝐀 𝐊𝐀𝐑𝐓𝐄 𝐓𝐇𝐄𝐘 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭",
"⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐇𝐀𝐑 𝐃𝐇𝐀𝐃𝐊𝐀𝐍 𝐌𝐀𝐈 𝐄𝐊 𝐑𝐀𝐙 𝐇𝐎𝐓𝐀 𝐇𝐀𝐈 𝐇𝐀𝐑 𝐁𝐀𝐀𝐓 𝐊𝐎 𝐁𝐀𝐓𝐀𝐍𝐄 𝐊𝐀 𝐄𝐊 𝐀𝐍𝐃𝐀𝐙 𝐇𝐎𝐓𝐀 𝐇𝐀𝐈 𝐉𝐀𝐁 𝐓𝐀𝐊 𝐓𝐇𝐎𝐊𝐀𝐑 𝐍𝐀 𝐋𝐀𝐆𝐄 𝐁𝐄𝐖𝐀𝐅𝐀𝐈 𝐊𝐈 𝐇𝐀𝐑 𝐊𝐈𝐒𝐈 𝐊𝐎 𝐀𝐏𝐍𝐄 𝐏𝐘𝐀𝐑 𝐏𝐀𝐑 𝐍𝐀𝐙 𝐇𝐎𝐓𝐀 𝐇𝐀𝐈 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭",
"⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐊𝐀𝐒𝐇 𝐊 𝐀𝐈𝐒𝐀 𝐁𝐇𝐈 𝐇𝐔𝐀 𝐇𝐎𝐓𝐀 𝐌𝐄𝐑𝐈 𝐊𝐀𝐌𝐈 𝐍𝐄 𝐓𝐔𝐉𝐇𝐄 𝐁 𝐔𝐃𝐀𝐀𝐒 𝐊𝐈𝐘𝐀 𝐇𝐎𝐓𝐀 𝐋𝐎𝐓 𝐀𝐀𝐓𝐄 𝐄𝐊 𝐏𝐀𝐋 𝐌𝐄 𝐓𝐄𝐑𝐄 𝐏𝐀𝐒𝐒 𝐓𝐄𝐑𝐄 𝐋𝐀𝐁𝐎 𝐍𝐄 𝐌𝐄𝐑𝐀 𝐍𝐀𝐀𝐌 𝐓𝐎 𝐋𝐈𝐘𝐀 𝐇𝐎𝐓𝐀 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭",
"⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐌𝐔𝐉𝐇𝐄 𝐁𝐇𝐈 𝐒𝐈𝐊𝐇𝐀 𝐃𝐎 𝐁𝐇𝐎𝐎𝐋 𝐉𝐀𝐍𝐄 𝐊𝐀 𝐇𝐔𝐍𝐄𝐑 𝐌𝐔𝐉𝐇 𝐒𝐄 𝐑𝐀𝐀𝐓𝐍𝐎 𝐊𝐎 𝐔𝐓𝐇 𝐔𝐓𝐆 𝐊𝐀𝐄 𝐑𝐎𝐘𝐀 𝐍𝐀𝐇𝐈 𝐉𝐀𝐓𝐀 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭",
"⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐂𝐇𝐀𝐋𝐄 𝐉𝐀𝐘𝐆𝐄 𝐄𝐊 𝐃𝐈𝐍 𝐓𝐔𝐉𝐇𝐄 𝐓𝐄𝐑𝐄 𝐇𝐀𝐀𝐋𝐏𝐀𝐑 𝐂𝐇𝐎𝐊𝐀𝐑 𝐏𝐇𝐈𝐑 𝐌𝐎𝐇𝐀𝐁𝐁𝐀𝐓 𝐊𝐘𝐀 𝐇𝐎𝐓𝐈 𝐇𝐀𝐈 𝐓𝐔𝐉𝐇𝐄 𝐊𝐇𝐔𝐃 𝐏𝐀𝐓𝐀 𝐂𝐇𝐀𝐋 𝐉𝐀𝐘𝐄𝐆𝐀 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭",
"⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐂𝐇𝐀𝐆 𝐊𝐀𝐑 𝐁𝐇𝐈 𝐍𝐀𝐇𝐈 𝐏𝐔𝐂𝐇 𝐒𝐀𝐊𝐓𝐄 𝐇𝐀𝐀𝐋 𝐔𝐍𝐊𝐀 𝐊𝐀𝐇𝐈 𝐖𝐎 𝐘𝐀 𝐍𝐀 𝐊𝐄𝐇𝐃𝐄 𝐊𝐈 𝐘𝐄 𝐇𝐀𝐊 𝐓𝐇𝐔𝐌𝐄 𝐊𝐈𝐒𝐍𝐄 𝐃𝐈𝐘𝐀 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭",
"⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐀𝐆𝐀𝐑 𝐑𝐈𝐒𝐇𝐓𝐄 𝐒𝐀𝐂𝐇𝐄 𝐇𝐎 𝐓𝐎 𝐔𝐍𝐊𝐎 𝐒𝐀𝐌𝐁𝐀𝐋𝐍𝐀 𝐍𝐀𝐇𝐈 𝐏𝐀𝐃𝐓𝐀 𝐀𝐔𝐑 𝐉𝐈𝐍 𝐑𝐈𝐒𝐇𝐓𝐎 𝐊𝐎 𝐒𝐀𝐌𝐁𝐇𝐀𝐋𝐀𝐍𝐀 𝐏𝐀𝐃𝐄 𝐖𝐎 𝐒𝐎𝐂𝐇 𝐍𝐀𝐇𝐈 𝐇𝐎𝐓𝐄 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭",
"⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐔𝐍𝐊𝐎 𝐉𝐀𝐍𝐀 𝐓𝐇𝐀 𝐖𝐎 𝐂𝐇𝐀𝐋𝐄 𝐆𝐘𝐄 𝐇𝐔𝐌 𝐊𝐎 𝐊𝐇𝐎𝐍𝐀 𝐓𝐇𝐀 𝐇𝐀𝐌 𝐍𝐄 𝐊𝐇𝐎 𝐃𝐈𝐘𝐀 𝐅𝐀𝐑𝐊 𝐒𝐈𝐑𝐅 𝐈𝐓𝐍𝐀 𝐓𝐇𝐀 𝐔𝐒 𝐍𝐄 𝐙𝐈𝐍𝐃𝐆𝐈 𝐊𝐀 𝐈𝐊 𝐏𝐈𝐋 𝐊𝐇𝐎𝐘𝐀 𝐇𝐔𝐌 𝐍𝐄 𝐄𝐊 𝐏𝐈𝐋 𝐌𝐀𝐈 𝐏𝐔𝐑𝐈 𝐙𝐈𝐍𝐃𝐆𝐈 𝐊𝐇𝐎 𝐃𝐈 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭",
"⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐃𝐎𝐎𝐑 𝐉𝐀𝐊𝐀𝐑 𝐁𝐇𝐈 𝐇𝐀𝐌 𝐃𝐎𝐎𝐑 𝐉𝐀𝐀 𝐍𝐀 𝐒𝐀𝐊𝐄𝐍𝐆𝐄 𝐊𝐈𝐓𝐍𝐀 𝐑𝐎𝐘𝐄𝐍𝐆𝐄 𝐇𝐀𝐌 𝐁𝐀𝐓𝐀 𝐍𝐀 𝐒𝐀𝐊𝐄𝐌𝐆𝐄 𝐆𝐇𝐀𝐌 𝐈𝐒𝐊𝐀 𝐍𝐀𝐇𝐈 𝐊𝐈 𝐀𝐀𝐏 𝐌𝐈𝐋 𝐍𝐀 𝐒𝐀𝐊𝐎𝐆𝐄 𝐃𝐀𝐑𝐃 𝐈𝐒 𝐁𝐀𝐀𝐓 𝐊𝐀 𝐇𝐎𝐆𝐀 𝐊𝐈 𝐇𝐀𝐌 𝐀𝐀𝐏𝐊𝐎 𝐁𝐇𝐔𝐋𝐀 𝐍𝐀 𝐒𝐀𝐊𝐄𝐍𝐆𝐄 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭",
"⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐐𝐀𝐃𝐀𝐑 𝐊𝐀𝐑𝐋𝐎 𝐔𝐍𝐊𝐈 𝐉𝐎 𝐓𝐔𝐌𝐒𝐄 𝐁𝐈𝐍𝐀 𝐌𝐀𝐓𝐋𝐀𝐁 𝐊𝐈 𝐂𝐇𝐀𝐀𝐇𝐀𝐓 𝐊𝐀𝐑𝐓𝐄 𝐇𝐀𝐈 𝐃𝐔𝐍𝐈𝐘𝐀 𝐌𝐀𝐈 𝐊𝐇𝐀𝐘𝐀𝐋 𝐑𝐀𝐊𝐇𝐍𝐄 𝐖𝐀𝐋𝐄 𝐊𝐀𝐌 𝐀𝐔𝐑 𝐓𝐀𝐊𝐋𝐄𝐄𝐅 𝐃𝐀𝐍𝐄 𝐖𝐀𝐋𝐄 𝐙𝐘𝐀𝐃𝐀 𝐇𝐎𝐓𝐄 𝐇𝐀𝐈 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭",
"⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐇𝐔𝐌 𝐍𝐀𝐘 𝐔𝐒 𝐑𝐀𝐀𝐓 𝐁𝐇𝐈 𝐓𝐔𝐌𝐇𝐄 𝐌𝐀𝐍𝐆𝐀 𝐓𝐇𝐀 𝐉𝐈𝐒 𝐑𝐀𝐀𝐓 𝐁𝐔𝐊𝐇𝐒𝐇𝐈𝐒𝐇 𝐊𝐈 𝐃𝐔𝐀 𝐌𝐀𝐍𝐆𝐓𝐘 𝐇𝐀𝐈 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭",
];
const imgLinks = [
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

    const message = `❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n` +
      `✰ 𝗧𝗜𝗠𝗘 ➪ ${hour12}:00 ${ampm} ⏰\n` +
      `✰ 𝗗𝗔𝗧𝗘 ➪ ${date}✰${month}✰${year} 📆\n` +
      `✰ 𝗗𝗔𝗬 ➪ ${day} ⏳\n\n` +
      `${randomShayari}\n\n` +
      `❁ ━━━━━ ❃ 𝐌.𝐑 𝐀𝐑𝐘𝐀𝐍 ❃ ━━━━━ ❁`;

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