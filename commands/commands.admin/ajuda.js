exports.run = async(client, message, args) => {
    message.delete();
    message.reply("Enviei-te os comando por DM!")
    message.author.send("Lista de Comandos:\n\n---\n?ajuda - Faz com que o bot te envie esta lista de comandos.\n---\n?kick - O bot kicka um utilizador [?kick @username razão].\n---\n?ban - O bot dá ban a um utilizador [?ban @username razão].\n---\n?limpar <quantidade> - Este comando serve para limpar todas as mensagens num canal!\n---\n")
    }
