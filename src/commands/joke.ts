import { MessageEmbed } from "discord.js";
import { getJoke } from "../requests";

export default async (message: any) => {
  try {
    var chat = message.content.split(" ");
    console.log(chat);
    if (chat[1].toLowerCase() == "code") {
      // console.log("code");
      getJoke("Programming").then((joke: any) => {
        // console.log(joke);
        if (joke.type === "single") {
          sendJokeSingle(joke, message);
        } else {
          sendJokeTwo(joke, message);
        }
      });
    } else if (chat[1].toLowerCase() === "dark") {
      // console.log("Dark");
      getJoke("Dark").then((joke: any) => {
        // console.log(joke);
        if (joke.type === "single") {
          sendJokeSingle(joke, message);
        } else {
          sendJokeTwo(joke, message);
        }
      });
    } else {
      getJoke("Any").then((joke: any) => {
        // console.log(joke);
        if (joke.type === "single") {
          sendJokeSingle(joke, message);
        } else {
          sendJokeTwo(joke, message);
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
};

// send discord message
const sendJokeSingle = async (joke: any, message: any) => {
  var embed = new MessageEmbed()
    .setTitle("brooooooo")
    .setDescription(joke.joke)
    .setImage(
      "https://cdn.discordapp.com/attachments/834975400429617164/991257157167239188/unknown.png"
    );
  message.channel.send({ embeds: [embed] });
};
const sendJokeTwo = async (joke: any, message: any) => {
  var embed = new MessageEmbed()
    .setTitle(joke.setup)
    .setDescription(joke.delivery)
    .setImage(
      "https://cdn.discordapp.com/attachments/834975400429617164/991257157167239188/unknown.png"
    );
  message.channel.send({ embeds: [embed] });
};
