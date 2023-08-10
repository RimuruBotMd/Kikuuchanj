const handler = require('../handler');

module.exports = async (conn, msg, setting) => {
  try {
    const { chats, from, mess, quotedMsg, prefix, sender, isOwner, mentionUser, isQuotedMsg, getGroupAdmins, isGroup, args, q, command, reply } = handler(msg, conn, setting);      
    const name = ["GROUP MENU"];  
    const tag = ["kick"];
    switch (command) {
      case 'kick': case 'tendang':
         var number;
        if (mentionUser.length !== 0) {
          number = mentionUser[0];
          conn.groupParticipantsUpdate(from, [number], "remove");
        }
        break;
    }
  } catch (err) {
    console.error(err);
    const { reply } = handler(msg, conn, setting);
    if (err) reply('Tag atau reply orang yg mau dikick\n\n*Contoh:* .kick @tag');
  }
};
