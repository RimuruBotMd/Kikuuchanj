const handler = require('../handler');

module.exports = async (conn, msg, setting) => {
  try {
    const {
      chats,
      from,
      prefix,
      sender,
      isOwner,      
      isGroup,
      args,
      q,
      command,
      reply
    } = handler(msg, conn, setting);
    const name = ["GROUP MENU"];  
    const tag = ["tagall"];
    const groupMetadata = isGroup ? await conn.groupMetadata(from) : '';
    const groupName = isGroup ? groupMetadata.subject : '';
    const groupId = isGroup ? groupMetadata.id : '';
    const groupMembers = isGroup ? groupMetadata.participants : '';
    const participants = isGroup ? await groupMetadata.participants : ''
    switch (command) {
      case 'tagall':           
        let teks_tagall = `〘 *Tag All* 〙\n\nDi Perintahkan Oleh\n@${sender.split('@')[0]}\n\nKata Dia\n\n${q ? q : ''}\n\n`;
        for (let mem of participants) {
          teks_tagall += `• @${mem.id.split('@')[0]}\n`;
        }
        conn.sendMessage(from, { text: teks_tagall, mentions: participants.map(a => a.id) }, { quoted: msg });
        break;
    }
  } catch (error) {
    console.error(error);
  }
};
