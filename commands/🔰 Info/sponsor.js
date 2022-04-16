const {
  MessageEmbed
} = require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`)
var ee = require(`${process.cwd()}/botconfig/embed.json`)
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const {
  swap_pages2
} = require(`${process.cwd()}/handlers/functions`);
module.exports = {
  name: "sponsor",
  category: "🔰 Info",
  aliases: ["sponsors"],
  description: "Shows the sponsor of this BoT",
  usage: "sponsor",
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    let embed1 = new MessageEmbed()
      .setColor(es.color)
      .setTitle(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable1"]))
      .setURL("https://discord.gg/vibesid")
      .setDescription(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable2"]))
      .setImage("-")
      .setFooter(client.getFooter("- == -5%", "https://imgur.com/jXyDEyb.png"))
    let embed2 = new MessageEmbed()
      .setColor(es.color)
      .setTimestamp()
      .setFooter(client.getFooter("- == -5%", 'https://cdn.discordapp.com/attachments/959784780285743136/960152405608112128/61-610054_lepop-shop-disco-de-vinil-png-transparent-png.png'))
      .setImage("https://cdn.discordapp.com/attachments/938468051123314808/962615873133244426/ezgif.com-gif-maker_3_1.gif")
      .setTitle(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable3"]))
      .setURL("https://discord.gg/vibesid")
      .setDescription(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable4"]));
    swap_pages2(client, message, [embed1, embed2])

  }
}
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://discord.gg/milrato
 * @INFO
 * Work for Milrato Development | https://milrato.dev
 * @INFO
 * Please mention him / Milrato Development, when using this Code!
 * @INFO
 */
