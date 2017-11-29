exports.run = async(client, message, args) => {
    message.delete();
    message.channel.send({embed: {
        color: 15158332,
        title: "REGRAS",
        description: "Aqui estão todas as regras que nós utiliza-mos nos servidor! \n",
        fields: [{
            name: "• 1ª Regra •",
            value: "Não é permitido qualquer tipo uso de cheats, hacks, exploits e bugs."
          },
          {
            name: "• 2ª Regra •",
            value: "Não é permitido fazer publicidade a conteúdos sem ser relativos à comunidade.."
          },
          {
            name: "• 3ª Regra •",
            value: "Aumentar o ping propositadamente."
          },
          {
            name: "• 4ª Regra •",
            value: "Não são permitidos nicks ofensivos, racistas, com palavrões entre outros."
          },
          {
            name: "• 5ª Regra •",
            value: "Respeitar todos os utilizadores com igualdade."
          },
          {
            name: "• 6ª Regra •",
            value: "Respeitar todos os utilizadores com igualdade."
          },
          {
            name: "• 7ª Regra •",
            value: "Evita palavras ofensivas e palavrões."
          },
          {
            name: "• 8ª Regra •",
            value: "Não é permitido ouvir músicas c/ som alto, caso não utilizem Headphones."
          },
          {
            name: "• 9ª Regra •",
            value: "Não é permitido qualquer tipo de conteúdo pornográfico ou racista, seja escrito ou oral."
          },
          {
            name: "• 10ª Regra •",
            value: "Tentem colocar modo PUSH to TALK para evitar RETORNO!"
          },
          {
            name: "• 11ª Regra •",
            value: "JAMAIS façam flood no canal ou no privado, estarão sujeitos a Kick ou Ban (por motivo justificado)."
          },
          {
            name: "• 12ª Regra •",
            value: "Não chorar, não gritar, não assobiar ou cantar dentro das salas onde estão a haver os eventos."
          },
          {
            name: "• 13ª Regra •",
            value: "Musica só é permitido na sala apropriada e com autorização de um Membro da Staff. (Isso inclui cantar na sala sem permissão dos demais)."
          },
          {
            name: "• 14ª Regra •",
            value: "Se estiveres problemas com configurações ou com microfone usar o push-do-talk em português (pressionar para falar), contacta um admin."
          },
          {
            name: "• 15ª Regra •",
            value: "É proibido entrar em salas em que não foi convidado."
          },
          {
            name: "• 16ª Regra •",
            value: "Qualquer desrespeito á nossa equipa do servidor, será kickado sem aviso, se persistir será banido permanentemente."
          },
          {
            name: "• 17ª Regra •",
            value: "Proibido usar PROGRAMAS PARA ALTERAR A VOZ em salas de eventos e salas livres de bate-papo."
          },
          {
            name: "• 18ª Regra •",
            value: "Só serão aceitas reclamações com Print's ou gravações."
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "©Fairydx"
        }
      }
});
}