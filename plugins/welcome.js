//Gunakan di grup .welcome on 
const handler = require('../handler');
module.exports = async (conn, msg, setting) => {
  try {
    const {
      isGroup,
      chats,
      from,
      prefix,
      sender,
      pushname,
      body,
      args,
      q,
      fs,
      isCommand,
      command,
      isCmd,
      reply,
      welcome_JSON
    } = handler(msg, conn, setting);
  const name = ["GROUP MENU"];  
  const tag = ["welcome on", "welcome off"];
    let welcomeJson = welcome_JSON;
    const switchWelcome = () => {
      if (args[0] === 'ON' || args[0] === 'on' || args[0] === 'On') {
        welcomeJson.push(from);
        fs.writeFileSync('./database/welcome.json', JSON.stringify(welcomeJson));
      } else if (
        args[0] === 'OFF' ||
        args[0] === 'OF' ||
        args[0] === 'Of' ||
        args[0] === 'Off' ||
        args[0] === 'of' ||
        args[0] === 'off'
      ) {
        welcomeJson.splice(from, 1);
        fs.writeFileSync('./database/welcome.json', JSON.stringify(welcomeJson));
      }
    };

    switch (command) {
      case 'welcome':
        switchWelcome();
        break;
    }
  } catch (error) {
    const { reply } = handler(msg, conn, setting);
    console.error(error);
    if (error) reply(`Masukan Perintah\n.welcome on untuk aktifkan\n.welcome off untuk nonaktifkan`);
  }
};
