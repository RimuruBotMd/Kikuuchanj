const handler = require('../handler');
const ytmp4 = require ('@ruhend/ytmp4');
module.exports = async (conn, msg, setting) => {
  const { chats, from, prefix, isGroup, sender, pushname, body, args, q, isCommand, command, isCmd, reply } = handler(msg, conn, setting);
  const name = ["DOWNLOADER"];
  const tag = ["ytmp4", "ytv"];
  switch (command) {
    case 'ytmp4': case 'ytv': case 'video':
      if (!q) return reply('*Masukan Link Youtubenya*');
      let video = q;      
      let resv = await ytmp4(`${video}`);      
      conn.sendMessage(from,{ video:{url:resv.download},caption:`*Youtube Video*\n*Judul :* ${resv.title}`},{quoted:msg})
      break;
  }
};
