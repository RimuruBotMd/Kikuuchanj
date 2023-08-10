const { mediafireDl } = require('../function/scrape_Mediafire')
const handler = require('../handler');
const ttdl = require ('@ruhend/tiktok');
module.exports = async (conn, msg, setting) => {
  const { chats, from, prefix, isGroup, sender, pushname, body, args, q, isCommand, command, isCmd, reply } = handler(msg, conn, setting);
const name = ["DOWNLOADER"];
  const tag = ["mediafire", "mf"];  switch (command) {
  case 'mediafire': case 'mf':
if (!q) return reply('*Contoh:*\n.mediafire https://www.mediafire.com/file/o7sqqm3zfrzvc3m/twrp-3.0.2-0-vivalto3mve.tar/file')
let isLinks = q.match(/(?:https?:\/{2})?(?:w{3}\.)?mediafire(?:com)?\.(?:com|be)(?:\/www\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply('Link yang kamu berikan tidak valid')
let emfi1 = await mediafireDl(`${isLinks}`)
if (emfi1[0].size.split('MB')[0] >= 100) return reply('File Melebihi Batas '+util.format(emfi1))
let result4 = `*MEDIAFIRE*
*Nama* : ${emfi1[0].nama}
*Size* : ${emfi1[0].size}
*Type* : ${emfi1[0].mime}
Mengirim file...`
reply(result4)
conn.sendMessage(from, {document:{url:emfi1[0].link}, fileName:emfi1[0].nama, mimetype: emfi1[0].mime}, {quoted:msg})
break
}
}