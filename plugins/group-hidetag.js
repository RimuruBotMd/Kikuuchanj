const handler = require('../handler');
module.exports = async (conn, msg, setting) => {

try { const { chats,from,mess,prefix,sender,isOwner,getGroupAdmins,isGroup,args,q,command, reply } = handler(msg, conn, setting);
const name = ["GROUP MENU"];  
const tag = ["hidetag"];
const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
switch (command) {

case 'hidetag':

let mem = [];
groupMembers.map( i => mem.push(i.id) )

conn.sendMessage(from, { text: q ? q : '', mentions: mem })

break

}

} catch (error) {
    console.error(error);
  }
}