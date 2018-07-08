const Eris = require('eris')
const signale = require('signale')
const sounds = require('./sounds')
const { discordToken } = require('./config')

const bot = new Eris(discordToken)
let soundQueue = {}
let activeSessions = new Set()

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
        let soundList = soundCategory.files.map(file => `- ${file.name}`).join('\n')
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
        const soundfound = sound.files.filter(file => file.name === commandArray[1])
        let soundFile = ''
        let randomSound = {}
        let isRandomSound = false
        if (commandArray[1] !== undefined && soundfound.length >= 1) {
          soundFile = `sounds/${sound.prefix}_${soundfound[0].name}.${soundfound[0].filetype}`
        } else {
          isRandomSound = true
          randomSound = sound.files[Math.floor(Math.random() * sound.files.length)]
          soundFile = `sounds/${sound.prefix}_${randomSound.name}.${randomSound.filetype}`
        }

        const voiceID = msg.member.voiceState.channelID
        if (voiceID) {
          if (activeSessions.has(voiceID)) {
            // There is active playback, add to queue
            signale.pending(`Queued ${soundFile} for playback in voice channel ${voiceID}`)
            if (!soundQueue[voiceID]) {
              if (isRandomSound) {
                soundQueue[voiceID] = [{file: soundFile, format: randomSound.filetype}]
              } else {
                soundQueue[voiceID] = [{file: soundFile, format: soundfound[0].filetype}]
              }
            } else {
              if (isRandomSound) {
                soundQueue[voiceID].push({file: soundFile, format: randomSound.filetype})
              } else {
                soundQueue[voiceID].push({file: soundFile, format: soundfound[0].filetype})
              }
            }
          } else {
            if (isRandomSound) {
              await playSound(voiceID, {file: soundFile, format: randomSound.filetype})
            } else {
              await playSound(voiceID, {file: soundFile, format: soundfound[0].filetype})
            }
          }
        }
      }
    })
  })
})

/**
 * Play a sound in a voice channel
 *
 * Current Issue: Playback can sometimes stop broadcasting audio requiring the entire queue to finish playback
 * @param {string} voiceID ID of voice Channel
 * @param {{file: String, format: String}} soundFile Object containing playback information
 */
async function playSound (voiceID, { file, format }) {
  try {
    const connection = await bot.joinVoiceChannel(voiceID)
    activeSessions.add(voiceID)
    signale.pending(`Playing ${file} in voice channel ${voiceID}`)
    await connection.play(file, {format})
    connection.once('end', async () => {
      if (soundQueue[voiceID] && soundQueue[voiceID].length > 0) {
        const poppedFile = soundQueue[voiceID].shift()
        await playSound(voiceID, poppedFile)
        return
      }
      if (soundQueue[voiceID] && soundQueue[voiceID].length === 0) {
        await bot.leaveVoiceChannel(voiceID)
        activeSessions.delete(voiceID)
        signale.success(`Left voice channel ${voiceID}`)
      } else if (!soundQueue[voiceID]) {
        await bot.leaveVoiceChannel(voiceID)
        activeSessions.delete(voiceID)
        signale.success(`Left voice channel ${voiceID}`)
      }
    })
  } catch (e) {
    signale.fatal(`Error playing ${file} in voice channel ${voiceID}`, e)
  }
}

bot.connect()
