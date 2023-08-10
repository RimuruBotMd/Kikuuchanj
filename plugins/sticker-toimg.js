const handler = require('../handler');
const fs =  require('fs')
module.exports = async (conn, msg, setting) => {
  const { from, isQuotedSticker,mess,prefix,exec,getRandom,ffmpeg,isVideo,isQuotedVideo, webp2mp4File,isQuotedMsg,type,sender, isSticker ,body, args, q, quotedMsg, command, isCmd, reply} = handler(msg, conn, setting);
  const name = ["CONVERTER MAKER"];  
  const tag = ["toimg", "toimage"];
  switch (command) {
case 'toimg': case 'toimage':
if (isSticker || isQuotedSticker){
await conn.downloadAndSaveMediaMessage(msg, "sticker", `./tmp/${sender.split("@")[0]}.webp`)
let buffer = fs.readFileSync(`./tmp/${sender.split("@")[0]}.webp`)
var rand1 = 'tmp/'+getRandom('.webp')
var rand2 = 'tmp/'+getRandom('.png')
fs.writeFileSync(`./${rand1}`, buffer)
reply(mess.wait)
exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
if (err) return reply(mess.error.api)
conn.sendMessage(from, {caption: `*Berhasil Ke Image!*`, image: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
})
} else {
reply('*Reply sticker nya dengan pesan .toimg*\n\n*Atau bisa sticker gif dengan pesan #tovideo*')
}
break
}
}