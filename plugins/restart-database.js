const handler = require('../handler');
module.exports = async (conn, msg, setting) => {
  const { chats,mess, fs,isOwner,from, prefix, sender, db_user, body, args, q, isCommand, command, isCmd, reply } = handler(msg, conn, setting);
  const name = ["OWNER"];  
  const tag = ["resetdb"];
  switch (command) {
case 'resetdb':
{

if (!isOwner) return reply(mess.OnlyOwner)

let para_kos = "[]"
db_user.splice(para_kos)

fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user, null, 1))

reply('Sukses restart database')

}

break

}

}