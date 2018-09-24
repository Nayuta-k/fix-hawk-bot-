module.exports.run = async (Discord, client, message) => {
    
    let user = message.author;
    let embed = new Discord.RichEmbed()

    .setColor('RANDOM')
    .setDescription(`Here there's all the stuff to invite and get some help ${user.username}`  )
    .setThumbnail(client.user.displayAvatarURL)
    .addField('Invite me', "[invitation to your server](https://discordapp.com/oauth2/authorize?&client_id=493355264872022018&scope=bot&permissions=8)")
    return message.channel.send(embed)
}