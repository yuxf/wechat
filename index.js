var wechat = require('./lib/wechat');
// 等待回复
wechat.List = require('./lib/list');
// 事件
wechat.Event = require('./lib/events');

module.exports = wechat;

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  var echoString = request.query.echostr;
  console.log("echoString = ", echoString);
  response.send(echoString);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
