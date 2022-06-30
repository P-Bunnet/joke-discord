import { MessageEmbed } from "discord.js";
import { getStoic } from "../requests";

export default async (message: any) => {
  getStoic()
    .then((stoicQuote: any) => {
      var embed = new MessageEmbed()
        .setTitle("stoicism time baby!")
        .setDescription(`${stoicQuote.data.quote} - ${stoicQuote.data.author}`);
      message.channel.send({ embeds: [embed] });
    })
    .catch((err: any) => {
      console.log(err);
    });
};
