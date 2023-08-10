const handler = require('../handler');
const { getRandom } = require("../function/func_Server");
module.exports = async (conn, msg, setting) => {
  const { chats, from,isQuotedAudio, fs,mess,exec,prefix, isGroup, sender, pushname, body, args, q, isCommand, command, isCmd, reply } = handler(msg, conn, setting);  
   const name = ["AUDIO CHANGER"];  
   const tag = ["bass", "blown", "deep", "earrape", "fast", "fat", "nightcore", "reverse", "robot", "slow", "smooth", "tupai"];
  switch (command) {
  case 'bass':{
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./tmp/${command}.mp3`)
let ran = 'tmp/'+getRandom('.mp3')
var kode_js = '-af equalizer=f=54:width_type=o:width=2:g=20'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })

})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'blown':{

if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./tmp/${command}.mp3`)
let ran = 'tmp/'+getRandom('.mp3')
var kode_js = '-af acrusher=.1:1:64:0:log'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })

})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'deep':{

if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./tmp/${command}.mp3`)
let ran = 'tmp/'+getRandom('.mp3')
var kode_js = '-af atempo=4/4,asetrate=44500*2/3'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })

})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'earrape':{

if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./tmp/${command}.mp3`)
let ran = 'tmp/'+getRandom('.mp3')
var kode_js = '-af volume=12'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })

})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'fast':{

if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./tmp/${command}.mp3`)
let ran = 'tmp/'+getRandom('.mp3')
var kode_js = '-filter:a "atempo=1.63,asetrate=44100"'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })

})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'fat':{

if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./tmp/${command}.mp3`)
let ran = 'tmp/'+getRandom('.mp3')
var kode_js = '-filter:a "atempo=1.6,asetrate=22100"'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })

})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'nightcore':{

if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./tmp/${command}.mp3`)
let ran = 'tmp/'+getRandom('.mp3')
var kode_js = '-filter_complex "areverse'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })

})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'reverse':{

if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./tmp/${command}.mp3`)
let ran = 'tmp/'+getRandom('.mp3')
var kode_js = '-filter_complex "areverse"'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })

})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'robot':{

if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./tmp/${command}.mp3`)
let ran = 'tmp/'+getRandom('.mp3')
var kode_js = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })

})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'slow':{

if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./tmp/${command}.mp3`)
let ran = 'tmp/'+getRandom('.mp3')
var kode_js = '-filter:a "atempo=0.7,asetrate=44100"'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })

})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'smooth':{

if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./tmp/${command}.mp3`)
let ran = 'tmp/'+getRandom('.mp3')
var kode_js = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })

})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'tupai':{

if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./tmp/${command}.mp3`)
let ran = 'tmp/'+getRandom('.mp3')
var kode_js = '-filter:a "atempo=0.5,asetrate=65100"'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })

})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break
  }
};
