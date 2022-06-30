import { Interaction, Message, MessageEmbed } from "discord.js";
import { leauge } from "../axiosHandler";

export default async (interaction: any, name: string) => {
  leauge(name)
    .then(async (res: any) => {
      var champrune = res.data;
      champrune = champrune[champrune.length - 1];
      console.log(res.data);
      var embed = new MessageEmbed()
        .setTitle(name)
        .setDescription(
          `Main: ${champrune.pathmain} , Sub: ${champrune.mainrunes} \n Secondary ${champrune.pathsecondary} ,Sub: ${champrune.secondaryrunes}`
        );
      //   .setImage();
      await interaction.reply({ embeds: [embed] });
    })
    .catch((err: any) => {
      console.log(err);
    });
};
