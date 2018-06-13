const Discord = require("discord.js");

const client = new Discord.Client();

var prefix = '.';

client.login(process.env.TOKEN);

client.on("ready", () => {
    console.log("[Serenity BOT] Je suis pret !");
    client.user.setGame("Serenity");

});

client.on("message" , message => {

    if(message.content === prefix + "Sokrax"){
        var sokrax_help = new Discord.RichEmbed()
        .setColor("#FF6600")
        .setTitle("Contacter Sokrax")
        .setDescription("Voici les réseaux pour contacter Sokrax")
        .addBlankField("true")
        .addField(":bird: Twitter " , "__*@SokraxProd*__")
        .addBlankField("true")
        .addField(":large_blue_circle: Steam" , "__*Sokrax*__")
        .setFooter("© Serenity")
        message.channel.sendMessage(sokrax_help);
    }
    if(message.content === prefix + "membres"){
        var membres = new Discord.RichEmbed()
        .setColor("#FF6600")
        .setTitle("Serenity")
        .addBlankField("true")
        .addField("Nombre de membres :heart:", message.guild.channels.size)
        .setFooter("© Serenity")
        message.channel.sendMessage(membres);
    }

});
