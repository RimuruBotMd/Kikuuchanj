const handler = require('../handler');

module.exports = async (conn, msg, setting) => {
try {
const { chats, from, quotedMsg, mess, isQuotedMsg, mentions, mentionUser, getGroupAdmins, isGroupAdmins, prefix, sender, body, isGroup, antilink, args, command, reply } = handler(msg, conn, setting);
const name = ["GROUP MENU"];  
const tag = ["promote"];
switch (command) {
case 'promote':
if (mentionUser.length !== 0) {
conn.groupParticipantsUpdate(from, [mentionUser[0]], "promote");
break;
}
}
} catch (err) {
const { chats, from } = handler(msg, conn, setting);
console.error(err);
if (err) conn.sendMessage(from,{text:`Tag Orangnya Yang Mau Di Promote !`},{quoted:msg});
}
};