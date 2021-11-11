const { MessageEmbed } = require('discord.js')
const Players = require("../../server/players")


module.exports = {
    name : 'playerlist',
    aliases : [''],


    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message) => {

      
        Players.Players().then((result) => {
            
            let list = result.data;
            var id = "";
            var players = "";
            var ping = ""
            for(var i = 0; i < list.length; i++){
                id += list[i].id+'\n';
                players += list[i].name+'\n';
                ping += list[i].ping+'\n';
            }


        const POnlineEmbed = new MessageEmbed()
            .setTitle(`**Connected Users**`)
            .setDescription(`Total Players: ${list.length}`)
            .addFields(
                { name: '**Player ID:  **', value: id, inline: true  },
                { name: '**||  Player Name:**', value: players, inline: true  },
                { name: '**  ||  Ping: 📶**', value: ping, inline: true })
            .setTimestamp()
            .setColor("#03fc41")
            .setAuthor(client.user.username, client.user.avatarURL())
            .setThumbnail(message.guild.iconURL({size: 1024, dynamic: true}))
            .setFooter(message.guild.name, message.guild.iconURL())
            .setURL("");

        message.channel.send(POnlineEmbed)
            
        }).catch(function(){

        const POfflineEmbed = new MessageEmbed()
            .setTitle(`**Connected Users**`)
            .setDescription(`Total Players : 0`)
            .addFields(
                { name: '**Player ID:  **', value: `  **-**`, inline: true  },
                { name: '**||  Player Name:**', value: `  **-**`, inline: true  },
                { name: '**  ||  Ping: 📶**', value: `  **-**`, inline: true })
            .setTimestamp()
            .setColor("#fc0303")
            .setAuthor(client.user.username, client.user.avatarURL())
            .setThumbnail(message.guild.iconURL({size: 1024, dynamic: true}))
            .setFooter(message.guild.name, message.guild.iconURL())
            .setURL("");

        message.channel.send(POfflineEmbed)
                
        })
        
    message.delete();

    }
}



