exports.run = async(client, message, args) => {
    message.delete();
    message.reply("Enviei-te os comando por DM!")
    message.author.send("Lista de Comandos:\n\n`?ajuda` - Faz com que o bot te envie esta lista de comandos.\n`?kick <@utilizador razão>` - O bot kicka um utilizador.\n`?ban <@utilizador razão>` - O bot dá ban a um utilizador.\n`?limpar <quantidade>` - Este comando serve para limpar todas as mensagens num canal! (Quantidade máxima é 100)\n")
    }
