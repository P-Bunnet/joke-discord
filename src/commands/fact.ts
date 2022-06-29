import { MessageEmbed } from "discord.js";
import { getFact } from "../requests";

export default async (message:any) => {
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