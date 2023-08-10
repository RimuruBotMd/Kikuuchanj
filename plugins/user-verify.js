const handler = require('../handler');
module.exports = async (conn, msg, setting) => {
const { chats, from, prefix,db_user,fs,mentions, sleep,makeid,cekUser, sender,command,reply } = handler(msg, conn, setting);
const name = ["MAIN MENU"];  
const tag = ["verify", "daftar"];
switch (command) {
case 'verify': case 'v': case 'daftar':{
if (cekUser("id", sender) !== null) return reply('Kamu Sudah Daftar!!')
var res_us = `${makeid(10)}`
var user_name = `#KONTOL${makeid(5)}`
let object_user = {"id": sender, "name": user_name, "seri": res_us, "premium": false }
db_user.push(object_user)
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user, 2, null))
await sleep(1000)
var verify_teks =`
Number : +${sender.split('@')[0]}
SN : ${res_us}
*silahkan ketik .menu*
`
mentions(`
Berhasil √@${sender.split("@")[0]}
${verify_teks}
`, [sender])
}
break
}
}