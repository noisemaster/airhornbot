const Eris = require('eris')
const signale = require('signale')
const sounds = require('./sounds')
const { discordToken } = require('./config')

const bot = new Eris(discordToken)

bot.on('ready', () => {
  signale.success('Ready')
  bot.editStatus({name: 'airhorn.wav', type: 2})
})

bot.on('messageCreate', msg => {
  const commandArray = msg.content.split(' ').map(x => x.toLowerCase())
  if (commandArray[0] === '!help') {
    if (commandArray[1]) {
      let soundCategory = sounds.filter(sound => sound.name === commandArray[1])
      if (soundCategory.length !== 0) {
        soundCategory = soundCategory[0]
        let soundList = soundCategory.files.map(file => `- ${file}`).join('\n')
        soundList = `**The sounds for the category ${commandArray[1]}**
Use any of ${soundCategory.commands.join(', ')} with any of the following sounds to play that sound
${soundList}`
        bot.createMessage(msg.channel.id, soundList)
        signale.success(`Sent help message for ${commandArray[1]}`)
      }
    } else {
      let soundList = sounds
        .map(x => `**${x.name}** - ${x.commands.join(', ')}`)
        .join('\n')
      soundList = `**Use any of the following commands on the right to get a random sound!
Use !help {name on the left} to see the commands needed to play a sound directly!**
${soundList}`
      bot.createMessage(msg.channel.id, soundList)
      signale.success('Sent help message')
    }
    return
  }

  sounds.forEach(sound => {
    sound.commands.forEach(async command => {
      if (commandArray[0] === command) {
        let soundFile = ''
        if (commandArray[1] !== undefined && sound.files.filter(file => file === commandArray[1]).length >= 1) {
          soundFile = `sounds/${sound.prefix}_${commandArray[1]}.dca`
        } else {
          soundFile = `sounds/${sound.prefix}_${sound.files[Math.floor(Math.random() * sound.files.length)]}.dca`
        }

        if (msg.member.voiceState.channelID) {
          const voiceID = msg.member.voiceState.channelID
          try {
            const connection = await bot.joinVoiceChannel(voiceID)
            signale.pending(`Playing ${soundFile} in voice channel ${voiceID}`)
            await connection.play(soundFile, {format: 'dca'})
            connection.once('end', async () => {
              await bot.leaveVoiceChannel(voiceID)
              signale.success(`Left voice channel ${voiceID}`)
            })
          } catch (e) {
            signale.fatal(`Error playing ${soundFile} in voice channel ${voiceID}`, e)
          }
        }
      }
    })
  })
})

bot.connect()
