const fs = require('fs');
const chalk = require('chalk');
const moment = require('moment');

const time = moment().format('HH:mm:ss DD/MM/YYYY');

function uncache(module = '.') {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

function nocache(module, cb = () => {}) {
  //console.log('Welcome.....');
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
  });
}

const path = require('path');
const pluginsFolder = path.join(__dirname, '../plugins');
const files = fs.readdirSync(pluginsFolder);

for (const file of files) {
  if (file.endsWith('.js')) {
    const pluginPath = path.join(pluginsFolder, file);
    const plugin = require(pluginPath);
    nocache(pluginPath, module =>
      console.log(chalk.greenBright('[ Millie MD ]  ') + time + chalk.cyanBright(` "${module}" Telah diupdate!`))
    );
    //plugin();
  }
}

require('../main');
nocache('../main', module =>
  console.log(chalk.greenBright('[ Millie MD ]  ') + time + chalk.cyanBright(` "${module}" Telah diupdate!`))
);
/*
require('../command/menu');
nocache('../command/menu', module =>
  console.log(chalk.greenBright('[ Millie MD ]  ') + time + chalk.cyanBright(` "${module}" Telah diupdate!`))
);
*/
require('../connection');
nocache('../connection', module =>
  console.log(chalk.greenBright('[ Millie MD ]  ') + time + chalk.cyanBright(` "${module}" Telah diupdate!`))
);

require('./func_Server');
nocache('./func_Server', module =>
  console.log(chalk.greenBright('[ Millie MD ]  ') + time + chalk.cyanBright(` "${module}" Telah diupdate!`))
);

module.exports = {
  nocache,
  uncache
};
