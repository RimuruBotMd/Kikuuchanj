const handler = require('../handler');
const fs =  require('fs')
module.exports = async (conn, msg, setting) => {
  const { from, isImage,isQuotedImage,mess,exec,getRandom,ffmpeg, content,isQuotedMsg,type,sender, isQuotedVideo ,body, args, q, quotedMsg, command, isCmd, reply,prefix } = handler(msg, conn, setting);
  const name = ["CONVERTER MAKER"];  
  const tag = ["sticker"];
  switch (command) {
  case 'sticker': case 's': case 'stiker':
if (isImage || isQuotedImage){
await conn.downloadAndSaveMediaMessage(msg, "image", `./tmp/${sender.split("@")[0]}.jpeg`)
let buffer = fs.readFileSync(`./tmp/${sender.split("@")[0]}.jpeg`)
reply(mess.wait)
var rand1 = 'tmp/'+getRandom('.jpeg')
var rand2 = 'tmp/'+getRandom('.webp')
fs.writeFileSync(`${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./tmp/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
fs.unlinkSync(`./${rand2}`)})}).addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"]).toFormat('webp').save(`${rand2}`)
} else {
reply(`Kirim gambar dengan caption ${prefix+command} atau balas gambar yang sudah dikirim`)
}
break
  }
};