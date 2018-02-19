const Eris = require('eris')
const sounds = require('./sounds')
const config = require('./config')

const bot = new Eris(config.discordToken)

bot.on('ready', () => {
  console.log('Ready')
  bot.editStatus({name: 'airhorn.wav', type: 2})
})

bot.on('messageCreate', msg => {
  const commandArray = msg.content.split(' ').map(x => x.toLowerCase())
  if (commandArray[0] === '!help') {
    let soundList = sounds
      .map(x => `**${x.name}** - ${x.commands.join(', ')}`)
      .join('\n')
    soundList = `**Use any of the following commands on the right to get a random sound!
Use !help {name on the left} to see the commands needed to play a sound directly!**
${soundList}`
    bot.createMessage(msg.channel.id, soundList)
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
            console.log(`Playing ${soundFile} in voice channel ${voiceID}`)
            await connection.play(soundFile, {format: 'dca'})
            connection.once('end', async () => {
              await bot.leaveVoiceChannel(voiceID)
              console.log(`Left voice channel ${voiceID}`)
            })
          } catch (e) {
            console.error(`Error occured in vc ${voiceID}: e.toString()`)
          }
        }
      }
    })
  })
})

bot.connect()
