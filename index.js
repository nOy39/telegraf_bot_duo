const { Telegraf, Markup } = require('telegraf')
const config = require('./config.json')

const bot = new Telegraf(config.token)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.tek((ctx) => ctx.reply('Tek command complete'))
bot.on('text', (ctx) => {
  // Explicit usage
  ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`)
console.log(ctx.getChat)
  // Using context shortcut
  ctx.reply(`Hello ${ctx.update.message.from.first_name}`)
})
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
