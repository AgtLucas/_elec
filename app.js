var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 400, height: 400});

  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  mainWindow.openDevTools();
  console.log(123);

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
