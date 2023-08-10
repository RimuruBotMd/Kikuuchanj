const handler = require('../handler');
const ytmp3 = require ('@ruhend/ytmp3');
module.exports = async (conn, msg, setting) => {
  const { chats, from, prefix, isGroup, sender, pushname, body, args, q, isCommand, command, isCmd, reply } = handler(msg, conn, setting);
  const name = ["DOWNLOADER"];
  const tag = ["ytmp3", "yta"];
  switch (command) {
    case 'yta': case 'ytmp3': case 'audio':
      if (!q) return reply('*Masukan Link Youtubenya*');
      let audio = q;      
      let res = await ytmp3(`${audio}`);      
      conn.sendMessage(from, {
        document: { url: res.download },
        fileName: `${res.title}~RuhendMD.mp3`,
        mimetype: 'audio/mpeg'
      }, { quoted: msg });
      break;
  }
};