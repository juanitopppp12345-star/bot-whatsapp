import makeWASocket from '@whiskeysockets/baileys'

async function startBot() {
  const sock = makeWASocket()

  console.log("Bot iniciado")

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0]
    if (!msg.message) return

    const texto = msg.message.conversation

    if (texto === 'hola') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Hola 👋 soy tu bot' })
    }
  })
}

startBot()
