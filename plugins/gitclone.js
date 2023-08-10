const handler = require('../handler');
module.exports = async (conn, msg, setting) => {
  const { chats, from,fetch, prefix, isGroup, sender, pushname, body, args, q, isCommand, command, isCmd, reply } = handler(msg, conn, setting);
  const name = ["DOWNLOADER"];
  const tag = ["gitclone"]
  switch (command) {
case 'git': case 'gitclone':{
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) return reply('link githubnya mana?\n*Contoh:*\n.gitclone https://github.com/Vladimir-Kemii/Kikuchanj')
var linknya = q
if (!regex1.test(linknya)) return reply('link salah!')
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
reply(`*Mohon tunggu*,\n*sedang mengirim repository..*`)
conn.sendMessage(from, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: msg }).catch((err) => reply('Maaf link github yang kamu berikan di private, dan tidak bisa di jadikan file'))
}
break
}
}