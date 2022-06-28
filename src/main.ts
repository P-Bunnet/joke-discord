import { Intents, Message, MessageEmbed } from "discord.js";
import dotenv from "dotenv";
import Discord from "discord.js";
dotenv.config();
dotenv.config({ path: "./.env." });
// console.log(process.env.DISCORD_TOKEN);
// import Discord and Intents from discord.js

// api call handler
import axios from "axios";
import { getFact, getJoke } from "./commands";

const axiosClient = axios.create({
  baseURL: `https://v2.jokeapi.dev/joke`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error.response;
    console.error("Looks like there was a problem. Status Code: " + res.status);
    return Promise.reject(error);
  }
);

// commands

// const getJoke = async () => {
//   const response = await axiosClient.get(
//     "/Any?blacklistFlags=religious,racist,nsfw"
//   );
//   //   console.log(response.data);
//   return response.data;
// };

// const getJokeCode = async () => {
//   const response = await axiosClient.get(
//     "/Programming?blacklistFlags=religious,racist,nsfw"
//   );
//   //   console.log(response.data);
//   return response.data;
// };

// const getJokeDark = async () => {
//   const response = await axiosClient.get(
//     "/Dark?blacklistFlags=religious,racist,nsfw"
//   );
//   //   console.log(response.data);
//   return response.data;
// };

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
    try {
      var chat = message.content.split(" ");
      console.log(chat);
      if (chat[1].toLowerCase() == "code") {
        // console.log("code");
        getJoke("Programming").then((joke: any) => {
          // console.log(joke);
          if (joke.type === "single") {
            var embed = new MessageEmbed()
              .setTitle("brooooooo")
              .setDescription(joke.joke)
              .setImage(
                "https://cdn.discordapp.com/attachments/834975400429617164/991257157167239188/unknown.png"
              );
            message.channel.send({ embeds: [embed] });
          } else {
            var embed = new MessageEmbed()
              .setTitle(joke.setup)
              .setDescription(joke.delivery)
              .setImage(
                "https://cdn.discordapp.com/attachments/834975400429617164/991257157167239188/unknown.png"
              );
            message.channel.send({ embeds: [embed] });
          }
        });
      } else if (chat[1].toLowerCase() === "dark") {
        // console.log("Dark");
        getJoke("Dark").then((joke: any) => {
          // console.log(joke);
          if (joke.type === "single") {
            var embed = new MessageEmbed()
              .setTitle("brooooooo")
              .setDescription(joke.joke)
              .setImage(
                "https://cdn.discordapp.com/attachments/834975400429617164/991257157167239188/unknown.png"
              );
            message.channel.send({ embeds: [embed] });
          } else {
            var embed = new MessageEmbed()
              .setTitle(joke.setup)
              .setDescription(joke.delivery)
              .setImage(
                "https://cdn.discordapp.com/attachments/834975400429617164/991257157167239188/unknown.png"
              );
            message.channel.send({ embeds: [embed] });
          }
        });
      } else {
        getJoke("Any").then((joke: any) => {
          // console.log(joke);
          if (joke.type === "single") {
            var embed = new MessageEmbed()
              .setTitle("brooooooo")
              .setDescription(joke.joke)
              .setImage(
                "https://cdn.discordapp.com/attachments/834975400429617164/991257157167239188/unknown.png"
              );
            message.channel.send({ embeds: [embed] });
          } else {
            var embed = new MessageEmbed()
              .setTitle(joke.setup)
              .setDescription(joke.delivery)
              .setImage(
                "https://cdn.discordapp.com/attachments/834975400429617164/991257157167239188/unknown.png"
              );
            message.channel.send({ embeds: [embed] });
          }
        });
      }
    } catch (err) {
      console.log("err" + err);
      getJoke("Any").then((joke: any) => {
        // console.log(joke);
        if (joke.type === "single") {
          var embed = new MessageEmbed()
            .setTitle("brooooooo")
            .setDescription(joke.joke)
            .setImage(
              "https://cdn.discordapp.com/attachments/834975400429617164/991257157167239188/unknown.png"
            );
          message.channel.send({ embeds: [embed] });
        } else {
          var embed = new MessageEmbed()
            .setTitle(joke.setup)
            .setDescription(joke.delivery)
            .setImage(
              "https://cdn.discordapp.com/attachments/834975400429617164/991257157167239188/unknown.png"
            );
          message.channel.send({ embeds: [embed] });
        }
      });
    }
  }

  if (message.content.startsWith("!fact")) {
    getFact()
      .then((fact: any) => {
        var embed = new MessageEmbed()
          .setTitle("ly fact of the day")
          .setDescription(fact.text)
          .setImage(
            "https://cdn.discordapp.com/attachments/834975400429617164/991355583716413510/unknown.png"
          );
        message.channel.send({ embeds: [embed] });
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
});
