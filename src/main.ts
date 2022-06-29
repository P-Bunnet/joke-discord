import { Intents, Message, MessageEmbed } from "discord.js";
import dotenv from "dotenv";
import Discord from "discord.js";
dotenv.config();
dotenv.config({ path: "./.env." });
// console.log(process.env.DISCORD_TOKEN);
// import Discord and Intents from discord.js

// api call handler
import axios from "axios";
import { getFact, getJoke } from "./requests";
import joke from "./commands/joke";
import fact from "./commands/fact";
import anime from "./commands/anime";

const token = process.env.DISCORD_TOKEN;

const client = new Discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// login to discord
client.login(token);

// log a message when ready
client.on("ready", () => {
  console.log("Ready!", client.user?.tag);
});
// on cliend messageCreate response with a message
client.on("messageCreate", (message: Message) => {
  if (message.author.bot) return;
  // log the message

  //   check if message start with !joke
  if (message.content.startsWith("!joke")) {
    joke(message);
  }

  if (message.content.startsWith("!fact")) {
    fact(message);
  }
  if (message.content.startsWith("!anime")) {
    anime(message);
  }
});
