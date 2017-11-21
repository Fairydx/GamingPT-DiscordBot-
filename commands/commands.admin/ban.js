exports.run = async(client, message, args) => {

    message.delete();
    if (!message.member.roles.find("name", "Controlar-o-GameBot")) { 
    message.reply('precisas da permissão \`Controlar-o-GameBot\` para poder usar este comando!');
    return;
    }
       if  (!message.member.hasPermissions(["BAN_MEMBERS"])) return message.reply("Não tens permissão para executar este comando!!");
       let reason = args.slice(1).join(' ');
       let user = message.mentions.users.first();
       if (message.mentions.users.size < 1) return message.reply('Seleciona o utilizador que queres banir! (?ban @username razão)').catch(console.error);
       if (reason.length < 1) return message.reply('Deves especificar o motivo para o utilizador ser banido!(?ban @username razão)');
    
       if (!message.guild.member(user).bannable) return message.reply("Eu não posso banir este utilizador!");
       let member = await message.guild.member(user).ban()
    
       const Discord = require("discord.js");
       const embed = new Discord.RichEmbed()
           .setColor('#FF0000')
           .setTimestamp()
           .addField('Ação:', '__***Ban***__')
           .addField('Utilizador:', `${user.username}`)
           .addField('Staff:', `${message.author.username}`)
           .addField('Razão:', reason)
           .setFooter('GamingPT Bot Oficial')
       return message.channel.sendEmbed(embed).catch(console.error);
      
   };