/**
menu juga y bang hampir mau mati gw bikin menu doank begadang trs semingguan jadi tinggal ganti ajh pake pencarian /search kalo misalnya ada yang belom ke ganti
kalo mau bikin fitur / plugins baru ikutin ajh contoh yang udh ada
full no enc ada bang kalo yang skrng ini cjs, yang esm banyak fitur dan push member atau push kontak
**/
const handler = require('../handler');
module.exports = async (conn, msg, setting) => {
  const { from, command, n2, fs, fetch, sender, cekUser, prefix, reply } = handler(msg, conn, setting);
  const name = ["MAIN MENU"];
  const tag = ["menu", "help", "command"];
  const thumbnail = 'https://telegra.ph/file/1f8370e356d383ac84da9.jpg'
  const prem = `${cekUser("premium", sender)? 'Aktif':'Tidak'}`
  const pemilik = '6288980870067@s.whatsapp.net'
  const sgc = 'https://chat.whatsapp.com/EHvO9j6JMHb9roHNTvtbdy'
  const jembut = '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦'
  switch (command) {
    case 'menu': case 'help': case 'command': {
      let menus = new Map();
      const _0xc7fbc4=_0x502d;function _0x1359(){const _0x414814=['6433040PfzIzT','2REwEWh','./plugins','\x22,\x20\x22','utf-8','push','matchAll','353790JkclJn','1592820XhDJza','endsWith','2960848JZDALY','forEach','from','.js','441PoDhBV','match','7zpSLDA','345547SdCJrV','15093080UEuebG','12KwClpv','2785YaRjhn','19914LbJQrz','readFileSync','has'];_0x1359=function(){return _0x414814;};return _0x1359();}function _0x502d(_0x47f299,_0x5e3e5d){const _0x135983=_0x1359();return _0x502d=function(_0x502d03,_0x3e0e39){_0x502d03=_0x502d03-0xca;let _0x149615=_0x135983[_0x502d03];return _0x149615;},_0x502d(_0x47f299,_0x5e3e5d);}(function(_0x37e354,_0x4a9118){const _0x927e2e=_0x502d,_0x5490b1=_0x37e354();while(!![]){try{const _0x12b7ed=parseInt(_0x927e2e(0xcf))/0x1*(parseInt(_0x927e2e(0xd7))/0x2)+parseInt(_0x927e2e(0xde))/0x3+parseInt(_0x927e2e(0xd6))/0x4+-parseInt(_0x927e2e(0xd2))/0x5*(-parseInt(_0x927e2e(0xd3))/0x6)+-parseInt(_0x927e2e(0xce))/0x7*(parseInt(_0x927e2e(0xd0))/0x8)+-parseInt(_0x927e2e(0xcc))/0x9*(parseInt(_0x927e2e(0xdd))/0xa)+-parseInt(_0x927e2e(0xe0))/0xb*(-parseInt(_0x927e2e(0xd1))/0xc);if(_0x12b7ed===_0x4a9118)break;else _0x5490b1['push'](_0x5490b1['shift']());}catch(_0x443a71){_0x5490b1['push'](_0x5490b1['shift']());}}}(_0x1359,0xefd78),fs['readdirSync'](_0xc7fbc4(0xd8))[_0xc7fbc4(0xe1)](_0x450e67=>{const _0x583d1b=_0xc7fbc4;if(_0x450e67[_0x583d1b(0xdf)](_0x583d1b(0xcb))){const _0x7feb7c=fs[_0x583d1b(0xd4)]('./plugins/'+_0x450e67,_0x583d1b(0xda)),_0x636356=/const\sname\s=\s\["([\w\s]+)"\]/,_0x5ae145=/const\stag\s=\s\["(.+?)"\]/g,_0x4c79c6=_0x7feb7c[_0x583d1b(0xcd)](_0x636356),_0x4b3919=Array[_0x583d1b(0xca)](_0x7feb7c[_0x583d1b(0xdc)](_0x5ae145));if(_0x4c79c6&&_0x4c79c6[0x1]){const _0x582688=_0x4c79c6[0x1];!menus[_0x583d1b(0xd5)](_0x582688)&&menus['set'](_0x582688,[]);for(const _0x7b59d9 of _0x4b3919){if(_0x7b59d9&&_0x7b59d9[0x1]){const _0x174ca0=_0x7b59d9[0x1]['split'](_0x583d1b(0xd9));menus['get'](_0x582688)[_0x583d1b(0xdb)](..._0x174ca0);}}}}}));                       
      function _0x4d2d(_0xf59406,_0x48b698){const _0x25ed5d=_0x25ed();return _0x4d2d=function(_0x4d2df1,_0x39848f){_0x4d2df1=_0x4d2df1-0x1a8;let _0x35aa18=_0x25ed5d[_0x4d2df1];return _0x35aa18;},_0x4d2d(_0xf59406,_0x48b698);}const _0x376247=_0x4d2d;(function(_0x5d65ff,_0x4bd460){const _0x548789=_0x4d2d,_0x25260b=_0x5d65ff();while(!![]){try{const _0x1eea4f=-parseInt(_0x548789(0x1b0))/0x1+-parseInt(_0x548789(0x1b2))/0x2+-parseInt(_0x548789(0x1a8))/0x3*(parseInt(_0x548789(0x1a9))/0x4)+parseInt(_0x548789(0x1aa))/0x5*(parseInt(_0x548789(0x1ad))/0x6)+parseInt(_0x548789(0x1af))/0x7+-parseInt(_0x548789(0x1b4))/0x8*(parseInt(_0x548789(0x1b3))/0x9)+parseInt(_0x548789(0x1ae))/0xa*(parseInt(_0x548789(0x1ac))/0xb);if(_0x1eea4f===_0x4bd460)break;else _0x25260b['push'](_0x25260b['shift']());}catch(_0x24eab9){_0x25260b['push'](_0x25260b['shift']());}}}(_0x25ed,0x393c8));let text='';for(const [menuName,menuTags]of menus){text+=_0x376247(0x1ab)+menuName+'\x0a',text+='│⭔'+prefix+menuTags['filter']((_0x3ab69f,_0x373885)=>menuTags['indexOf'](_0x3ab69f)===_0x373885)['join'](_0x376247(0x1b1)+prefix)+'\x0a└────────────⭓\x0a\x0a';}function _0x25ed(){const _0x496069=['457390GEpzGs','\x0a│⭔','740350NrmPIb','9eLQKTr','2425088XbKrFy','6921XxKGQz','400aFTydW','5kLWZsp','┌──⭓','6520778wdzZxV','78282GWZOCJ','20DKoTtE','2780386ZEMiEx'];_0x25ed=function(){return _0x496069;};return _0x25ed();}     
      function _0x1d56(_0x3cd21f,_0x363caf){var _0xde29b3=_0xde29();return _0x1d56=function(_0x1d56c0,_0x1d7733){_0x1d56c0=_0x1d56c0-0x1a8;var _0x49d23a=_0xde29b3[_0x1d56c0];return _0x49d23a;},_0x1d56(_0x3cd21f,_0x363caf);}var _0x44ae59=_0x1d56;function _0xde29(){var _0x336046=['2499DFXPkj','2456vMofBr','\x0aPremium\x20:\x20','7764911qAPZoW','6457368OcDRpO','split','408230bcszCf','21130pGvKBW','buffer','5841gJUvVT','\x0a\x0a\x0a\x0a','25748MjuvZN','PDF','sendMessage','1730EmhScE','https://chat.whatsapp.com/EHvO9j6JMHb9roHNTvtbdy','1251HCLeUu','565BdkLaD','Kikuchanj\x20MD\x0a©Sazumi Kemii'];_0xde29=function(){return _0x336046;};return _0xde29();}(function(_0x4e0eb5,_0x52f228){var _0x341183=_0x1d56,_0x462266=_0x4e0eb5();while(!![]){try{var _0x2fdfef=-parseInt(_0x341183(0x1aa))/0x1+-parseInt(_0x341183(0x1b2))/0x2*(-parseInt(_0x341183(0x1b7))/0x3)+parseInt(_0x341183(0x1af))/0x4*(-parseInt(_0x341183(0x1b5))/0x5)+parseInt(_0x341183(0x1a8))/0x6+-parseInt(_0x341183(0x1ba))/0x7+-parseInt(_0x341183(0x1b8))/0x8*(-parseInt(_0x341183(0x1b4))/0x9)+-parseInt(_0x341183(0x1ab))/0xa*(-parseInt(_0x341183(0x1ad))/0xb);if(_0x2fdfef===_0x52f228)break;else _0x462266['push'](_0x462266['shift']());}catch(_0x233592){_0x462266['push'](_0x462266['shift']());}}}(_0xde29,0xaef15),conn[_0x44ae59(0x1b1)](from,{'text':'User\x20:\x20@'+sender[_0x44ae59(0x1a9)]('@')[0x0]+_0x44ae59(0x1b9)+prem+'\x0aOwner\x20:\x20+'+pemilik[_0x44ae59(0x1a9)]('@')[0x0]+'\x0a\x0a'+jembut+_0x44ae59(0x1ae)+text,'contextInfo':{'forwardingScore':0x499602d2,'isForwarded':![],'mentionedJid':[sender],'externalAdReply':{'body':_0x44ae59(0x1b3),'containsAutoReply':!![],'mediaType':0x1,'mediaUrl':_0x44ae59(0x1b3),'renderLargerThumbnail':!![],'showAdAttribution':!![],'containsAutoReply':!![],'sourceId':_0x44ae59(0x1b3),'sourceType':_0x44ae59(0x1b0),'previewType':'PDF','sourceUrl':_0x44ae59(0x1b3),'thumbnail':await(await fetch(thumbnail))[_0x44ae59(0x1ac)](),'thumbnailUrl':_0x44ae59(0x1b3),'title':_0x44ae59(0x1b6)}}},{'quoted':msg}));
      break;
    }
  }
}