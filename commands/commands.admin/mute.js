exports.run = async(client, message, args) => {
    const ms = require("ms");
    message.delete();
    if  (!message.member.hasPermissions(["MUTE_MEMBERS"])) return message.reply("Não tens permissão para executar este comando!");
    let member = message.mentions.members.first();
    if(!member) return message.reply('Não mencionas-te um utilizador!');
    let muteRole = message.guild.roles.find("name", "Calado");
    if(!muteRole) return message.reply("Não existe um cargo com o nome `Calado`!");
    let params = message.content.split(" ").slice(1);
    let time = params[1];
    if(!time) return message.reply("Não foi defenido o tempo para o utilizador ficar calado!");
    
    member.addRole(muteRole.id);
    message.channel.send(`${member.user.tag}, foste calado por ${ms(ms(time), {long: true})}!`);

    setTimeout (function() {
        member.removeRole(muteRole.id);
        message.channel.send(`${member.user.tag}, podes voltar a falar normalmente. Foste calado por ${ms(ms(time), {long: true})}`)
    }, ms(time));
}