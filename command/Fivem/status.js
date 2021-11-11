const { MessageEmbed } = require('discord.js')
const Players = require("../../server/players")
const config = require("../../config.json")

module.exports = {
    name : 'status',
    aliases : [''],


    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message) => {
      
        Players.Players().then((result) => {

            if(result.status === 200){
                const embedonline = new MessageEmbed()
                .setTitle(`**Server Name: ${config.server_name}\nStatus: ✅ Online **`)
                .addFields({ name: 'Players Online', value: result.data.length, inline: true  })
                .setTimestamp()
                .setColor("#03fc41")
                .setAuthor(client.user.username, client.user.avatarURL())
                .setThumbnail(message.guild.iconURL({size: 1024, dynamic: true}))
                .setFooter(message.guild.name, message.guild.iconURL())
                .setURL("");

            message.channel.send(embedonline)
           }
           

        }).catch(function(){
            const embedoffline = new MessageEmbed()
            .setTitle(`**Server Name: ${config.server_name}\nStatus: ❌ Offline **`)
            .addFields({ name: 'Players Online', value: 'None', inline: true  })
            .setTimestamp()
            .setColor("RANDOM")
            .setAuthor(client.user.username, client.user.avatarURL())
            .setThumbnail(message.guild.iconURL({size: 1024, dynamic: true}))
            .setFooter(message.guild.name, message.guild.iconURL())
            .setURL("");

        message.channel.send(embedoffline)

        })

        message.delete();
        
    }
}



