const handler = require('../handler');

module.exports = async (conn, msg, setting) => {
  try {
    const { chats, from, prefix, sender, args, q, command, reply } = handler(msg, conn, setting);
    const name = ["GROUP MENU"];  
    const tag = ["revoke"];
    switch (command) {
      case 'revoke':
          conn.groupRevokeInvite(from)        
        break;
    }
  } catch (error) {
    console.error(error);
  }
}
