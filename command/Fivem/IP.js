const { MessageEmbed } = require('discord.js')
const { MessageButton } = require('discord-buttons') 
const config = require("../../config.json")

module.exports = {
    name : 'ip',
    aliases : ['connect'],



    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
      
    const embed = new MessageEmbed()
        .setTitle(`How to Connect in ${config.server_name}?`)
        .setDescription("")
        .addFields(
        {
            name:"Connect in FiveM (Aplication)",
            value:`${config.server_name}`
        },
        {
            name:"Connect in FiveM (Connect)",
            value:`connect ${config.server_connect}`
        }
        )
        .setImage(``)
        .setTimestamp()
        .setColor("RANDOM")
        .setAuthor(client.user.username, client.user.avatarURL())
        .setThumbnail(message.guild.iconURL({size: 1024, dynamic: true}))
        .setFooter(message.guild.name, message.guild.iconURL())
        .setURL("");


    let button1 = new MessageButton()
         .setStyle('url')
        .setLabel('Connect in Browser') 
        .setURL(`${config.server_url}`);


    message.channel.send(embed, { button: [button1]})
    message.delete();

    }
}

