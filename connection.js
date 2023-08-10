const { 
  default: 
  makeWASocket, 
  DisconnectReason, 
  useMultiFileAuthState, 
  makeInMemoryStore, 
  downloadContentFromMessage, 
  jidDecode, 
  generateForwardMessageContent, 
  generateWAMessageFromContent 
} = require('@adiwajshing/baileys')
const fs = require("fs");
const path = require('path');
const chalk = require('chalk')
const logg = require('pino')
require('./function/ObjectPath.js');
require('./function/FuncTerm.js');
require('./function/FuncListen.js');

const { serialize, 
  fetchJson, 
  getBuffer 
 } = require("./function/func_Server");
const { nocache, 
  uncache 
 } = require('./function/Chache_Data.js');
const { welcome_JSON } = require('./function/Data_Location.js')
const { auto_BlockCaller } = require('./function/Data_Server_Bot/Call_AutoBlock.js')
const {
  groupResponse_Welcome, 
  groupResponse_Remove, 
  groupResponse_Promote, 
  groupResponse_Demote 
 } = require('./function/group_Respon.js')
const { imageToWebp, 
  videoToWebp, 
  writeExifImg, 
  writeExifVid 
 } = require('./function/Exif_Write')
const { updateGroup } = require("./function/update_Group")
const store = makeInMemoryStore({ logger: logg().child({ level: 'silent', stream: 'store' }) });

function _0x1f70(_0x153adf,_0x5e6a1b){const _0xf7abd=_0xf7ab();return _0x1f70=function(_0x1f701f,_0x15c994){_0x1f701f=_0x1f701f-0x1aa;let _0x48af1c=_0xf7abd[_0x1f701f];return _0x48af1c;},_0x1f70(_0x153adf,_0x5e6a1b);}(function(_0x57aace,_0x348442){const _0xbc78e4=_0x1f70,_0x50b16a=_0x57aace();while(!![]){try{const _0x37c754=parseInt(_0xbc78e4(0x1ac))/0x1+parseInt(_0xbc78e4(0x1ae))/0x2*(-parseInt(_0xbc78e4(0x1b3))/0x3)+parseInt(_0xbc78e4(0x1ab))/0x4+parseInt(_0xbc78e4(0x1b5))/0x5*(-parseInt(_0xbc78e4(0x1b0))/0x6)+parseInt(_0xbc78e4(0x1ba))/0x7+-parseInt(_0xbc78e4(0x1b1))/0x8*(parseInt(_0xbc78e4(0x1ad))/0x9)+parseInt(_0xbc78e4(0x1aa))/0xa;if(_0x37c754===_0x348442)break;else _0x50b16a['push'](_0x50b16a['shift']());}catch(_0x50f7fc){_0x50b16a['push'](_0x50b16a['shift']());}}}(_0xf7ab,0x32315),store['readFromFile']('./sessions/baileys_store.json'),setInterval(()=>{const _0x3b9422=_0x1f70;store[_0x3b9422(0x1b2)](_0x3b9422(0x1b7));},0x15f90));const filePath='./sessions/baileys_store.json';function _0xf7ab(){const _0x4f4926=['250SoaQBN','Terjadi\x20kesalahan\x20saat\x20membaca\x20dan\x20mengolah\x20file\x20JSON:','283218AgLGdx','80UJuBHo','writeToFile','8031qgHUeX','error','10ikBAXH','stringify','./sessions/baileys_store.json','writeFileSync','parse','2088814bbglaQ','3619530hyEjCC','635004LrOdeC','128824msreaP','281979UYCULr'];_0xf7ab=function(){return _0x4f4926;};return _0xf7ab();}function beautifyJSONFile(_0x30c238){const _0x76f799=_0x1f70;try{const _0x485da7=fs['readFileSync'](_0x30c238),_0x3632c9=JSON[_0x76f799(0x1b9)](_0x485da7),_0x251f86=JSON[_0x76f799(0x1b6)](_0x3632c9,null,0x2);fs[_0x76f799(0x1b8)](_0x30c238,_0x251f86);}catch(_0xe91a4c){console[_0x76f799(0x1b4)](_0x76f799(0x1af),_0xe91a4c);}}setInterval(()=>{const _0x46c85e=_0x1f70;beautifyJSONFile(_0x46c85e(0x1b7));},0x16378);

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

function _0x4a15(_0xbe63ff,_0x129e10){var _0x42def6=_0x42de();return _0x4a15=function(_0x4a154c,_0x2d2cba){_0x4a154c=_0x4a154c-0x16d;var _0x280ed6=_0x42def6[_0x4a154c];return _0x280ed6;},_0x4a15(_0xbe63ff,_0x129e10);}(function(_0x4c0aaf,_0x4ef099){var _0x163de8=_0x4a15,_0x3ce396=_0x4c0aaf();while(!![]){try{var _0x366c76=-parseInt(_0x163de8(0x179))/0x1+-parseInt(_0x163de8(0x16e))/0x2*(-parseInt(_0x163de8(0x178))/0x3)+parseInt(_0x163de8(0x172))/0x4*(-parseInt(_0x163de8(0x16f))/0x5)+parseInt(_0x163de8(0x17c))/0x6+parseInt(_0x163de8(0x17a))/0x7*(parseInt(_0x163de8(0x170))/0x8)+parseInt(_0x163de8(0x171))/0x9+parseInt(_0x163de8(0x17b))/0xa;if(_0x366c76===_0x4ef099)break;else _0x3ce396['push'](_0x3ce396['shift']());}catch(_0x393822){_0x3ce396['push'](_0x3ce396['shift']());}}}(_0x42de,0xa4f62),setTimeout(()=>{var _0x35aec3=_0x4a15;console[_0x35aec3(0x176)](color('\x0a▒█▀▄▀█\x20▀█▀\x20▒█░░░\x20▒█░░░\x20▀█▀\x20▒█▀▀▀\x20\x0a▒█▒█▒█\x20▒█░\x20▒█░░░\x20▒█░░░\x20▒█░\x20▒█▀▀▀\x20\x0a▒█░░▒█\x20▄█▄\x20▒█▄▄█\x20▒█▄▄█\x20▄█▄\x20▒█▄▄▄\x20\x0a\x0a▒█▀▀█\x20▒█▀▀▀█\x20▀▀█▀▀\x20\u3000\x20▒█▀▄▀█\x20▒█▀▀▄\x20\x0a▒█▀▀▄\x20▒█░░▒█\x20░▒█░░\x20\u3000\x20▒█▒█▒█\x20▒█░▒█\x20\x0a▒█▄▄█\x20▒█▄▄▄█\x20░▒█░░\x20\u3000\x20▒█░░▒█\x20▒█▄▄▀\x0a\x0a',_0x35aec3(0x175))),console['log'](color(_0x35aec3(0x173),'cyan'),color(_0x35aec3(0x174),_0x35aec3(0x175))),console[_0x35aec3(0x176)](color(_0x35aec3(0x17d),_0x35aec3(0x177)),color(_0x35aec3(0x16d),'yellow'));},0x2710));function _0x42de(){var _0x1bcddd=['pink','log','yellow','3NRVURu','537710gxmyXE','56NqIHkU','6237830IsyNhj','2769732GPOspK','\x0aMillie\x20BOT\x20MD\x20Versi\x202\x0a','\x0aTHANKS\x20TO:\x20\x0a•\x20Allah\x0a•\x20Ruhend\x0a•\x20Lainnya\x0a','1783174HQVtXk','87535bTguKH','2928KWKuRb','4288221tbKgqg','284vMSGxc','Millie\x20Bot\x20MD\x20','Author\x20Ruli\x20Henderson'];_0x42de=function(){return _0x1bcddd;};return _0x42de();}

let setting = JSON.parse(fs.readFileSync('./config.json'));

const connectToWhatsApp = async () => { try {
let { state, saveCreds } = await useMultiFileAuthState('./sessions')
const conn = makeWASocket({
printQRInTerminal: true,
logger: logg({ level: 'silent' }),
browser: ['Kikuchanj','Chrome','1.0.0'],
auth: state,
patchMessageBeforeSending: (message) => {
         const requiresPatch = !!(
            message.buttonsMessage ||
            message.templateMessage ||
            message.listMessage
         );
         if (requiresPatch) {
            message = {
               viewOnceMessage: {
                  message: {
                     messageContextInfo: {
                        deviceListMetadataVersion: 2,
                        deviceListMetadata: {},
                     },
                     ...message,
                  },
               },
            }
         }
         return message
      },
      getMessage: async (key) => {
         if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg.message || undefined
         }
         return {
            conversation: ''
         }
      }      
}
)
    
store.bind(conn.ev)
conn.ev.on('messages.upsert', async m => {
try {
var msg = m.messages[0]
if (!m.messages) return;
if (msg.key && msg.key.remoteJid == "status@broadcast") return
msg = serialize(conn, msg)
require('./main')(conn, msg, m, setting)
 } catch (error) {
    console.error(error);
  }
})

const _0x24b5cd=_0x220e;function _0x220e(_0x2154fc,_0x21f9ef){const _0x2c0d35=_0x2c0d();return _0x220e=function(_0x220e8c,_0x414342){_0x220e8c=_0x220e8c-0x1ba;let _0x18194d=_0x2c0d35[_0x220e8c];return _0x18194d;},_0x220e(_0x2154fc,_0x21f9ef);}function _0x2c0d(){const _0x136aa9=['4823943olFBZd','.js','5OvNmvo','messages','559638SDupde','endsWith','929880UmImnf','status@broadcast','820DaUnXl','6106242clLspf','join','readdirSync','remoteJid','8DEqdBr','messages.upsert','470040YMxmiJ','key','10357991mGFLZs','3842880eozSyA'];_0x2c0d=function(){return _0x136aa9;};return _0x2c0d();}(function(_0x518149,_0x4f38bb){const _0x3ea30c=_0x220e,_0x99725c=_0x518149();while(!![]){try{const _0x417bac=-parseInt(_0x3ea30c(0x1c2))/0x1+-parseInt(_0x3ea30c(0x1bb))/0x2+-parseInt(_0x3ea30c(0x1bc))/0x3+-parseInt(_0x3ea30c(0x1cb))/0x4+parseInt(_0x3ea30c(0x1be))/0x5*(-parseInt(_0x3ea30c(0x1c5))/0x6)+-parseInt(_0x3ea30c(0x1ba))/0x7*(-parseInt(_0x3ea30c(0x1c9))/0x8)+parseInt(_0x3ea30c(0x1c0))/0x9*(parseInt(_0x3ea30c(0x1c4))/0xa);if(_0x417bac===_0x4f38bb)break;else _0x99725c['push'](_0x99725c['shift']());}catch(_0x5dbca7){_0x99725c['push'](_0x99725c['shift']());}}}(_0x2c0d,0xf0437),conn['ev']['on'](_0x24b5cd(0x1ca),async _0x2aa2e7=>{const _0x2d12eb=_0x24b5cd;var _0x4e1fed=_0x2aa2e7[_0x2d12eb(0x1bf)][0x0];if(!_0x2aa2e7['messages'])return;if(_0x4e1fed[_0x2d12eb(0x1cc)]&&_0x4e1fed[_0x2d12eb(0x1cc)][_0x2d12eb(0x1c8)]==_0x2d12eb(0x1c3))return _0x4e1fed=serialize(conn,_0x4e1fed);const _0x1dffdb=path[_0x2d12eb(0x1c6)](__dirname,'plugins'),_0xd5d0b3=fs[_0x2d12eb(0x1c7)](_0x1dffdb);for(const _0x14cff5 of _0xd5d0b3){if(_0x14cff5[_0x2d12eb(0x1c1)](_0x2d12eb(0x1bd))){const _0x591eaa=path['join'](_0x1dffdb,_0x14cff5),_0x500ad6=require(_0x591eaa);await _0x500ad6(conn,_0x4e1fed,_0x2aa2e7,setting);}}}));

conn.reply = (from, content, msg) => conn.sendMessage(from, { text: content }, { quoted: msg })
conn.ws.on('CB:call', async (json) => {
auto_BlockCaller(json)
})

function _0x503c(){const _0x1b009e=['4XnqJKg','5hRbrsr','1637566vmiSto','1369158SILcBS','1412624iNYKMa','Koneksi\x20Terputus...','10OSOSTg','1136079AfIYyP','error','152865dEdhCE','loggedOut','Connected....','close','log','587144DKeMQZ','2799387MvphzT'];_0x503c=function(){return _0x1b009e;};return _0x503c();}function _0x4094(_0x191830,_0x2a0437){const _0x503c52=_0x503c();return _0x4094=function(_0x4094df,_0x1e2c16){_0x4094df=_0x4094df-0x151;let _0x518459=_0x503c52[_0x4094df];return _0x518459;},_0x4094(_0x191830,_0x2a0437);}(function(_0x55b53d,_0x37057d){const _0x321a3f=_0x4094,_0x36dd68=_0x55b53d();while(!![]){try{const _0x599553=parseInt(_0x321a3f(0x15e))/0x1*(-parseInt(_0x321a3f(0x155))/0x2)+parseInt(_0x321a3f(0x15c))/0x3+parseInt(_0x321a3f(0x159))/0x4*(parseInt(_0x321a3f(0x156))/0x5)+-parseInt(_0x321a3f(0x158))/0x6+parseInt(_0x321a3f(0x157))/0x7+parseInt(_0x321a3f(0x153))/0x8+parseInt(_0x321a3f(0x154))/0x9*(-parseInt(_0x321a3f(0x15b))/0xa);if(_0x599553===_0x37057d)break;else _0x36dd68['push'](_0x36dd68['shift']());}catch(_0x54300d){_0x36dd68['push'](_0x36dd68['shift']());}}}(_0x503c,0x2f6a6),conn['ev']['on']('connection.update',async _0x1025a8=>{const _0xd2ae13=_0x4094,{connection:_0x25f396,lastDisconnect:_0x20bc13}=_0x1025a8;_0x25f396===_0xd2ae13(0x151)&&(_0x20bc13[_0xd2ae13(0x15d)]?.['output']?.['statusCode']!==DisconnectReason[_0xd2ae13(0x15f)]?connectToWhatsApp():console[_0xd2ae13(0x152)](_0xd2ae13(0x15a))),console[_0xd2ae13(0x152)](_0xd2ae13(0x160),_0x1025a8);}),conn['ev']['on']('creds.update',saveCreds));

conn.ev.on('group-participants.update', async (update) =>{
const isWelcome = welcome_JSON
if(!isWelcome.includes(update.id)) return
groupResponse_Demote(conn, update)
groupResponse_Promote(conn, update)
groupResponse_Welcome(conn, update)
groupResponse_Remove(conn, update)
console.log(update)
})

function _0x586e(_0x173a04,_0x3d245d){const _0x31cc95=_0x31cc();return _0x586e=function(_0x586e97,_0x1c83e6){_0x586e97=_0x586e97-0x127;let _0x294ee0=_0x31cc95[_0x586e97];return _0x294ee0;},_0x586e(_0x173a04,_0x3d245d);}function _0x31cc(){const _0x3bdc30=['8USVfOc','593000nABfda','206844sraWUo','2212268GdQtkH','toFixed','1757082ZdTOBV','memoryUsage','22GHkBkP','26566416xqEuXX','rss','log','1028048hlGLBV','6599245GtFnGz'];_0x31cc=function(){return _0x3bdc30;};return _0x31cc();}(function(_0x4e2ea6,_0x27a93b){const _0xcf31ed=_0x586e,_0xdb68e9=_0x4e2ea6();while(!![]){try{const _0x44151f=parseInt(_0xcf31ed(0x12a))/0x1+parseInt(_0xcf31ed(0x130))/0x2*(-parseInt(_0xcf31ed(0x12b))/0x3)+-parseInt(_0xcf31ed(0x12c))/0x4+-parseInt(_0xcf31ed(0x128))/0x5+-parseInt(_0xcf31ed(0x12e))/0x6+parseInt(_0xcf31ed(0x127))/0x7+-parseInt(_0xcf31ed(0x129))/0x8*(-parseInt(_0xcf31ed(0x131))/0x9);if(_0x44151f===_0x27a93b)break;else _0xdb68e9['push'](_0xdb68e9['shift']());}catch(_0x380405){_0xdb68e9['push'](_0xdb68e9['shift']());}}}(_0x31cc,0xbb609));let ramCheck=setInterval(()=>{const _0x24cb9c=_0x586e;let _0x227822=process[_0x24cb9c(0x12f)]()[_0x24cb9c(0x132)]/(0x400*0x400);console[_0x24cb9c(0x133)]('RAM\x20Usage\x20:\x20'+_0x227822[_0x24cb9c(0x12d)](0x2)+'\x20MB');},0x1388);

conn.ev.on('group-update', async (anu) => {
updateGroup(conn, anu, MessageType)
})
conn.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await conn.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

conn.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

conn.downloadAndSaveMediaMessage = async(msg, type_file, path_file) => {
//const fileSize = fs.statSync(path_file).size / 1024 / 1024
//if (fileSize >= 110) return conn.sendMessage(from,{text:`File Lebih Dari 110 MB Donlod Sendiri  !`},{quoted:msg}) //throw new Error('\n\n*File Lebih Dari Batas Yang Owner Kasih 110MB ! Download Sendiri !*\n*Biasanya Sih Orang Orang Tolol Yang Nge Download File Atau Media Yang Ukurannya Gede Sengaja Lagi*\n*Pake Bot Gratis Tau Diri Lah Jangan Apa Apa Yang Ga Lu Butuhin Di Download Apalagi Filenya Gede Gede*\n\n')
if (type_file === 'image') {
var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(path_file, buffer)
return path_file
} else if (type_file === 'video') {
var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
let buffer = Buffer.from([])
for await(const chunk of stream) {
  buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(path_file, buffer)
return path_file
} else if (type_file === 'sticker') {
var stream = await downloadContentFromMessage(msg.message.stickerMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(path_file, buffer)
return path_file
} else if (type_file === 'audio') {
var stream = await downloadContentFromMessage(msg.message.audioMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(path_file, buffer)
return path_file
}
}
conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {

return response
})
}

conn.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {

return response
})
}
return conn
}
catch (error) {
    console.error(error);
  }
} 
connectToWhatsApp();