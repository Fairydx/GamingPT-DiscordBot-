exports.run = async(client, message, args) => {
    message.delete();
    message.reply("Enviei-te os comando por DM!")
    message.author.send("Lista de Comandos:\n\n---\n!ajuda - Faz com que o bot te envie esta lista de comandos.\n---\n!ola - O bot vai-te dizer olá.\n---\n")
    }
