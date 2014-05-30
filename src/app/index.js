var derby = require('derby');
var app = module.exports = derby.createApp('derby-app', __filename);

global.app = app;

app.loadViews (__dirname+'/../../views');
app.loadStyles(__dirname+'/../../styles');

app.get('/', function getPage(page, model){
  page.render();
});

