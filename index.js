const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

// Initialize the bot
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// Handle the /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const userName = msg.from.first_name || msg.from.username || "there";

    // Send a personalized greeting with the "Shop Now" button
    bot.sendMessage(chatId, `Hello, ${userName}! 🛍️ Welcome to our shop. Click "Shop Now" to explore!`, {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Shop Now 🛒",
                        web_app: {
                            url: "https://telegram-web-app-ecru.vercel.app/" // Replace with your hosted Web App URL
                        }
                    }
                ]
            ]
        }
    });
});
