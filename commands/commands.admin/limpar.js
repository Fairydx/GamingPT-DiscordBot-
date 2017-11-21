exports.run = async(client, message, args) => {
        async function purge() {
            message.delete(); //Apaga a mensagem do comando

            //Verifica se a permissão (Controlar-o-GameBot) foi dada ao utilizador
            if (!message.member.roles.find("name", "Controlar-o-GameBot")) {
            message.reply('precisas da permissão \`Controlar-o-GameBot\` para poder usar este comando!'); // Aviso de que o utilizador precisa da permissão
                return;
            }
            if (isNaN(args[0])) {
                // Envia a mensagem para o canal
                message.channel.send('Utiliza um número depois do comando. \n Como usar o comando: ' + prefixadmin + 'limpar <quantidade>');
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); // Isto vai buscar a quantidade de mensagens apagadas
            console.log(fetched.size + ' mensagens encontradas, a apagar...'); // Para aparecer na consola

            // Apagar as mensagens
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Erro: ${error}`)); //Se encontrar o erro, vai avisar no canal

        }

        purge();

    }