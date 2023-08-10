const handler = require('../handler');
module.exports = async (conn, msg, setting) => {
  try {
    const {
      chats,
      from,
      prefix,
      sender,
      body,
      isGroup,
      antilink,
      isAntiLink,
      getGroupAdmins,
      args,
      command,
      reply
    } = handler(msg, conn, setting);
   const name = ["GROUP MENU"];  
   const tag = ["infogroup"];
    const groupMetadata = isGroup ? await conn.groupMetadata(from) : '';
    const groupName = isGroup ? groupMetadata.subject : '';
    const groupMembers = isGroup ? groupMetadata.participants : '';
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : '';
    const { welcome_JSON } =  require('../function/Data_Location.js')
    welcomeJson = welcome_JSON
    const isWelcome = isGroup ? welcomeJson.includes(from) : true
    switch (command) {
      case 'infogc':
      case 'infogrup':
      case 'infogroup':
        let info = `*INFO GROUP*
          • *ID Group:* ${from}
          • *Nama Grup:* ${groupName}
          • *Total Member:* ${groupMembers.length}
          • *Total Admin:* ${groupAdmins.length}
          • *Antilink:* ${isAntiLink ? 'sedang aktif' : 'tidak aktif'}
          • *Welcome:* ${isWelcome ? 'sedang aktif' : 'tidak aktif'}          
        `;
        reply(info);
        break;
    }
  } catch (error) {
    console.error(error);
  }
};
