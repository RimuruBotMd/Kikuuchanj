const handler = require('../handler');
var orang_spam = []
module.exports = async (conn, msg, setting) => {
  const { chats, from, prefix, isGroup, sender, pushname, body, args, q, isOwner, command, isCmd, reply } = handler(msg, conn, setting);  
  const msgFilter = require("../function/func_Spam");
msgFilter.ResetSpam(orang_spam)
const spampm = () => {
console.log(color('SPAM', 'red'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
msgFilter.addSpam(sender, orang_spam)
reply('spam Terdeteksi Jeda 5 detik')}

const spamgr = () => {
console.log(color('SPAM', 'red'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
msgFilter.addSpam(sender, orang_spam)
reply('spam Terdeteksi Jeda 5 detik')
if (isCmd && msgFilter.isFiltered(sender) && !isGroup) return spampm()
if (isCmd && msgFilter.isFiltered(sender) && isGroup) return spamgr()
if (isCmd && args.length < 1 && !isOwner) msgFilter.addFilter(sender)
}
}