const handler = require('../handler');
const ttdl = require ('@ruhend/tiktok');
module.exports = async (conn, msg, setting) => {
  const { chats, from, prefix, isGroup, sender, pushname, body, args, q, isCommand, command, isCmd, reply } = handler(msg, conn, setting);
  const name = ["DOWNLOADER"];
  const tag = ["tiktok", "tt", "titit"];
  switch (command) {
    case 'tiktok':
    case 'tt':
    case 'titit':
    if (!q) return reply('*Masukan Link Tiktoknya*')
    let tiktok = q    
    let rest = await ttdl(`${tiktok}`)
    conn.sendMessage(from,{ video:{url:rest.video},caption:`*Tiktok*\n*User :* ${rest.author}\n*Judul :* ${rest.title}`},{quoted:msg})
   break
  }
};