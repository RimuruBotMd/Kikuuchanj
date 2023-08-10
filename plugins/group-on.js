const handler = require('../handler');
module.exports = async (conn, msg, setting) => {
  try {
    const { chats, from, prefix, sender, pushname, body, args, q, isCommand, command, isCmd, reply } = handler(msg, conn, setting);
    const name = ["GROUP MENU"];  
    const tag = ["group on", "buka"];
    switch (command) {
      case 'group on':
      case 'buka':
        conn.groupSettingUpdate(from, "not_announcement");
        break;
    }
  } catch (error) {
    const { from,reply } = handler(msg, conn, setting);
    console.error(error);
    if (error) {
      reply(error);
    }
  }
};
