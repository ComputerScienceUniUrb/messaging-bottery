
// Importazione degli altri moduli
var parseMap = require('./bottery/map.js').parseMap;
const App = require('./bottery/app.js');

const serviceAccount = require('./serviceAccountKey.json')
global.admin = require('firebase-admin');

admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://"+serviceAccount.project_id+".firebaseio.com"
});

// Definizione della funzione bottery
var bottery = async (botName, chatId, message) => {

  // carico il bot richiesto
  console.info('Load map '+botName);
  var raw = require('./bots/'+botName +'.js');

  // Bot non trovato
  if (!raw)
      throw new Error('Map '+botName+' not found');

  console.info('Starting '+ botName);
  if (!raw.settings)
    raw.settings = {
      id: botName
    };

  var rawMap = raw;
  var map = parseMap(raw);
  map.name = botName;

  var app = new App(chatId, message, map);
  // app.pointer.enterMap(map).then(
  //   app.update()
  // );
};

module.exports = bottery;
