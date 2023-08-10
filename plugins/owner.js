const handler = require('../handler');
module.exports = async (conn, msg, setting) => {
    const name = ["MAIN MENU"];
  
    const tag = ["owner"];

  const { chats, sendContact,from, prefix, isGroup, sender, pushname, body, args, q, isCommand, command, isCmd, reply } = handler(msg, conn, setting);
  switch (command) {
  case 'owner':
var owner = setting.ownerNumber
sendContact(from, owner, setting.ownerName, msg)
reply('Tuh')
break;
  }
};
