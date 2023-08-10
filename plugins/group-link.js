const handler = require('../handler');
module.exports = async (conn, msg, setting) => {try {
const { chats, from, isGroup, mess, prefix, sender, pushname, body, args, q, isCommand, command, isCmd, reply } = handler(msg, conn, setting);
const name = ["GROUP MENU"];  
const tag = ["linkgroup"];
switch (command) {
case 'linkgrup':
case 'linkgc':
case 'link':
if (!isGroup) return reply(mess.OnlyGrup);
var url = await conn.groupInviteCode(from).catch(() => reply(mess.error.api));
url = 'https://chat.whatsapp.com/' + url;
reply(`Link Group \n${url}`);
break;
}
} catch (error) {
console.error(error);
}
};
