require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent
  ]
})

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", (message) => {
  console.log(message)
  if (message.content == "olá") {
    message.reply("Seja bem-vindo à 🫧 dev");
  }
})


client.login(process.env.DISCORD_TOKEN);





