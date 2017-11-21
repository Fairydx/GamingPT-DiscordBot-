exports.run = async(client, message, args) => {
    const ms = require("ms");
    let member = message.mentions.members.first();
    if(!member) return message.reply('Não mencionas-te um utilizador!');
    let muteRole = message.guild.roles.find("name", "Calado");
    if(!muteRole) return message.reply("Não existe um cargo com o nome `Calado`!");
    let params = message.content.split(" ").slice(1);
    let time = params[1];
    if(!time) return message.reply("Não foi defenido o tempo para o utilizador ficar calado!")
    
    member.addrole(muteRole.id);
    msg.channel.send(`Foste calado por ${ms(ms(time), {long: true})} ${member.user.tag}!`);

    setTimeout (function() {
        member.removeRole(Calado.id);
        msg.channel.send(`${member.user.tag}, podes voltar a falar normalmente. Foste calado por ${ms(ms(time), {long: true})}`)
    }, ms(time));
}