import { Collection, Intents, Message, MessageEmbed } from "discord.js";
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
import league from "./commands/league";
import { SlashCommandBuilder } from "@discordjs/builders";
import leaguechamp from "./data/leaguechamp.json";

const token = process.env.DISCORD_TOKEN;

const client = new Discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const leaugechampMap = Array.from(leaguechamp, function (item) {
  return { name: item.champid, value: item.champid };
});
function chunk(arr: any, size: any) {
  var subArrayCount = arr.length / size;
  var res = [];
  for (var i = 0; i < subArrayCount; i++) {
    var from = size * i;
    var to = size * (1 + i);
    console.log(to);
    var sliced = arr.slice(from, to);
    res.push(sliced);
  }
  return res;
}
var splited = chunk(leaugechampMap, 25);

// login to discord
client.login(token);
// log a message when ready
client.on("ready", () => {
  console.log("Ready!", client.user?.tag);
  // const guildID = "834975399922368574";
  // const guild = client.guilds.cache.get(guildID);
  let command;
  command = client.application?.commands;

  // create slashcommand with slashcommand builder
  command?.create({
    name: "lol",
    description: "Show suggested Rune",
    options: [
      {
        name: "lol1",
        description: "Show suggested Rune",
        required: false,
        type: Discord.Constants.ApplicationCommandOptionTypes.STRING,
        choices: splited[0],
      },
      {
        name: "lol2",
        description: "Show suggested Rune",
        required: false,
        type: Discord.Constants.ApplicationCommandOptionTypes.STRING,
        choices: splited[1],
      },
      {
        name: "lol3",
        description: "Show suggested Rune",
        required: false,
        type: Discord.Constants.ApplicationCommandOptionTypes.STRING,
        choices: splited[2],
      },
      {
        name: "lol4",
        description: "Show suggested Rune",
        required: false,
        type: Discord.Constants.ApplicationCommandOptionTypes.STRING,
        choices: splited[3],
      },
      {
        name: "lol5",
        description: "Show suggested Rune",
        required: false,
        type: Discord.Constants.ApplicationCommandOptionTypes.STRING,
        choices: splited[4],
      },
      {
        name: "lol6",
        description: "Show suggested Rune",
        required: false,
        type: Discord.Constants.ApplicationCommandOptionTypes.STRING,
        choices: splited[5],
      },
      {
        name: "lol7",
        description: "Show suggested Rune",
        required: false,
        type: Discord.Constants.ApplicationCommandOptionTypes.STRING,
        choices: splited[6],
      },
    ],
  });

  // client.application?.commands.fetch().then((c) => console.log(c));
});

client.on("interactionCreate", async (interaction: any) => {
  if (!interaction.isCommand()) return;
  const { commandName, options } = interaction;
  if (commandName === "ping") {
    interaction.reply("pong");
  }
  if (commandName === "lol") {
    if (interaction.options.getString("lol1")) {
      league(interaction, interaction.options.getString("lol1"));
    }
    if (interaction.options.getString("lol2")) {
      league(interaction, interaction.options.getString("lol2"));
    }
    if (interaction.options.getString("lol3")) {
      league(interaction, interaction.options.getString("lol3"));
    }
    if (interaction.options.getString("lol4")) {
      league(interaction, interaction.options.getString("lol4"));
    }
    if (interaction.options.getString("lol5")) {
      league(interaction, interaction.options.getString("lol5"));
    }
    if (interaction.options.getString("lol6")) {
      league(interaction, interaction.options.getString("lol6"));
    }
    if (interaction.options.getString("lol7")) {
      league(interaction, interaction.options.getString("lol7"));
    }
  }
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
