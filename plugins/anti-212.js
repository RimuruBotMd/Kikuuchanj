/*
depending on you , wanna input what? 
don't change 212 that's Fuck user bot number that i've ever known
I'm not racist but that's true
if error tell me
*/
const handler = require('../handler');

module.exports = async (conn, msg, setting) => {
  const { from, chats, prefix, sender } = handler(msg, conn, setting); 
  
if (sender.startsWith('212')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('91')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('92')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('90')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('54')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('55')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('40')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('94')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('256')) {
return conn.updateBlockStatus(sender, 'block')
}
}