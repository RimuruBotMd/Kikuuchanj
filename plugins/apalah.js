const handler = require('../handler');
module.exports = async (conn, msg, setting) => {
const { from, command } = handler(msg, conn, setting);
const name = ["APALAH"];  
const tag = ["apalah"];
  switch (command) {
    case 'apalah': {
      const a = `apaan sih sok iya banget`;
      conn.sendMessage(from, { text: a }, { quoted: msg });
      break;
    }
  }
}