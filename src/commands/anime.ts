import { Message, MessageEmbed } from "discord.js";
import { getAnime } from "../requests";

export default async (message: Message) => {
  getAnime(message.attachments.first()?.url!)
    .then((anime: any) => {
      var embed = new MessageEmbed()
        .setTitle("Uhmm maybe it is")
        .setDescription(
          `Title: ${anime.result[0].filename} \n Episodes: ${
            anime.result[0].episode
          } \n nh jbas ta ${(
            parseFloat(anime.result[0].similarity) * 100
          ).toFixed(2)}% te`
        )
        .setImage(anime.result[0].image);
      message.channel.send({ embeds: [embed] });
    })
    .catch((err: any) => {
      console.log(err);
    });

  // .setImage(anime.image)
  // .setURL(anime.url)
};
