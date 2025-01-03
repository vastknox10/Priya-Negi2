const axios = require("axios");

module.exports.config = {
  name: "pinterest",
  version: "1.0.0",
  hasPermission: 0,
  credits: "SHANKAR SIR",
  description: "Search and send images from Pinterest based on user query.",
  commandCategory: "Utility",
  usages: "[keyword]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID } = event;

  // Check if user has provided a query
  const query = args.join(" ");
  if (!query) {
    return api.sendMessage(
      "❓ कृपया एक कीवर्ड प्रदान करें! उदाहरण: pinterest cat, pinterest flowers",
      threadID,
      messageID
    );
  }

  // Call the API with the query
  const apiURL = `https://shankar-sir-api.onrender.com/api/pinterest?text=${encodeURIComponent(query)}`;
  try {
    const response = await axios.get(apiURL);

    // Check if API returned a valid response
    if (response && response.data && response.data.data) {
      const imageUrl = response.data.data; // API response contains the image URL

      // Send the image
      return api.sendMessage(
        {
          body: `🖼️ यहाँ आपकी छवि है: "${query}"`,
          attachment: await global.utils.getStreamFromURL(imageUrl),
        },
        threadID,
        messageID
      );
    } else {
      return api.sendMessage(
        "⚠️ माफ करें, कोई परिणाम नहीं मिला। कृपया कोई अन्य कीवर्ड आज़माएं।",
        threadID,
        messageID
      );
    }
  } catch (error) {
    console.error("API Error:", error.response ? error.response.data : error.message);
    return api.sendMessage(
      "❌ API से परिणाम प्राप्त करने में समस्या हुई। कृपया बाद में प्रयास करें।",
      threadID,
      messageID
    );
  }
};