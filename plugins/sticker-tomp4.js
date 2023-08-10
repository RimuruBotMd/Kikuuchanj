const handler = require('../handler');
const fs =  require('fs')
module.exports = async (conn, msg, setting) => {
  const { from, isQuotedSticker,mess,prefix,exec,getRandom,ffmpeg,isVideo,isQuotedVideo, webp2mp4File,isQuotedMsg,type,sender, isSticker ,body, args, q, quotedMsg, command, isCmd, reply} = handler(msg, conn, setting);
  const name = ["CONVERTER MAKER"];  
  const tag = ["tomp4", "tovideo"];
  switch (command) {
case 'tomp4': case 'tovideo':
if (isSticker || isQuotedSticker){
await conn.downloadAndSaveMediaMessage(msg, "sticker", `./tmp/${sender.split("@")[0]}.webp`)
let buffer = `./tmp/${sender.split("@")[0]}.webp`
reply(mess.wait)
let webpToMp4 = await webp2mp4File(buffer)
conn.sendMessage(from, { video: {url:webpToMp4.result}, caption: 'Berhasil Ke Video'}, { quoted: msg })
} else {
reply('*Reply sticker gif atau stiker video dengan pesan #tovideo*')
}

break
}
}