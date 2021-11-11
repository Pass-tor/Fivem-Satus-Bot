const { MessageEmbed, User } = require('discord.js')
const config = require("../../config.json")


module.exports = {
    name : 'suggestion',
    aliases : [''],


    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message,args) => {

      let User1 =  message.member;
      let User2 = User1.nickname ? `${User1.nickname}`: `${User1.user.tag}`

      let suggest = args.join(" ")
      if (!suggest) return message.channel.send("Write new suggestion").then(msg => msg.delete({ timeout: 5000 }));

      const embed = new MessageEmbed()
      .setTitle("**New Suggestion**")
      .setDescription(suggest)
      .setImage(``)
      .setTimestamp()
      .setColor("RANDOM")
      .setAuthor(User2, User1.user.displayAvatarURL({size: 1024, dynamic: true}))
      .setThumbnail(message.guild.iconURL({size: 1024, dynamic: true}))
      .setFooter(message.guild.name, message.guild.iconURL())
      .setURL("");

      client.channels.cache.get(config.suggestion_channel).send(embed).then((msg)=>{
        msg.react("✅")
        msg.react("❌")
    })
    message.delete();

    }
}
